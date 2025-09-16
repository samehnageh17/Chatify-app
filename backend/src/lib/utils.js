import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) throw new Error("JWT Screct is not set");

  const token = jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, // prevent xss :cross site scriptting
    sameSite: "strict", // CREF attacks
    secure: process.env.NODE_ENV === "development" ? false : true,
  });
  return token;
};
