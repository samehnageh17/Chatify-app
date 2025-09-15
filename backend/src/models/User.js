import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "User must have email"],
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, "User must have name"],
    },
    password: {
      type: String,
      required: [true, "User must have Password"],
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const USer = mongoose.model("User", userSchema);

export default USer;
