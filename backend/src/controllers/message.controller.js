import cloudinary from "../lib/cloudinary.js";
import Message from "../models/Message.js";
import USer from "../models/User.js";
import User from "../models/User.js";

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (err) {
    console.error("Error in getAllContacts ", err);
    res.status(500).json({ message: "Server error" });
  }
};
export const getMassegesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: uerToChatId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: uerToChatId },
        { senderId: uerToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller", error);
    res.status(500).json({ error: "internal server error" });
  }
};

export const sendMessagesByUserID = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // if (!text || !image) {
    //   return res.status(400).json({ message: "Text or image not found" });
    // }
    // if (senderId.equals(receiverId)) {
    //   return res
    //     .status(400)
    //     .json({ message: "can not send message to my self" });
    // }
    const receivedExists = await User.exists({ _id: receiverId });
    if (!receivedExists) {
      return res.status(404).json({ message: "Reciver not found" });
    }
    let imageUrl;
    if (image) {
      // upload to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });
    await newMessage.save();
    res.status(201).json({ newMessage });
  } catch (err) {
    console.error("Error in senMessage controller", err.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getChatPartners = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    // find all messags belong to me
    const messages = await Message.find({
      $or: [{ senderId: loggedInUser }, { receiverId: loggedInUser }],
    });
    const chatPartnerIds = [
      ...new Set(
        messages.map((msg) =>
          msg.senderId.toString() === loggedInUser.toString()
            ? msg.receiverId.toString()
            : msg.senderId.toString()
        )
      ),
    ];
    const chatPartners = await User.find({
      _id: { $in: chatPartnerIds },
    }).select("-password");
    res.status(200).json({ chatPartners });
  } catch (err) {
    console.error("Error in getChatPartners controller ", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};
