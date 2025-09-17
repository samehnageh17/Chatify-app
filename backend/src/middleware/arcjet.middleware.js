import aj from "../lib/arcject.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjectProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);
    if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({
        error: "Spoofed bot detected",
        message: "Malicouse bot activity detected",
      });
    }

    if (decision.isDenied) {
      return res.status(429).json({ message: "Rate limit exceeded" });
    } else if (decision.reason.isBot()) {
      return res.status(403).json({ message: "Bot access denied" });
    } else {
      return res.status(403).json({
        message: "Access denied by security policy",
      });
    }
  } catch (err) {
    console.log("Arcjet Protection Error", err);
    next();
  }
};
