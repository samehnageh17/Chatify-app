import express from "express";
import {
  getAllContacts,
  getMassegesByUserId,
  sendMessagesByUserID,
  getChatPartners,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjectProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(protectRoute);
// router.use(arcjectProtection,protectRoute);
router.get("/contacts", getAllContacts);
router.get("/:id", getMassegesByUserId);
router.get("/chats", getChatPartners);
router.post("/send/:id", sendMessagesByUserID);

export default router;
