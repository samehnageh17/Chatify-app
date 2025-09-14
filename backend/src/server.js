import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
dotenv.config();
const app = express();

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server running on port ${Port} Successfuly`);
});
