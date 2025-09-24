import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendEmail } from "../utils/nodemailer.js";
import {
  verificationTemplate,
  welcomeTemplate,
} from "../utils/emailTemplates.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationToken();

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24hrs,
    });

    await newUser.save();

    // jwt
    generateTokenAndSetCookie(res, newUser._id);
    sendEmail(newUser.email, newUser.verificationToken, newUser.name, "verify");

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: { ...newUser._doc, password: undefined },
    });
  } catch (error) {
    console.log("server error", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error, try again later" });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() }, // check if code is not expired
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    } else {
      user.isVerified = true;
      user.verificationToken = undefined;
      user.verificationTokenExpiresAt = undefined;
      await user.save();
      sendEmail(user.email, user.name, "", "welcome");
      return res
        .status(200)
        .json({ success: true, message: "Account Verified Successfully" });
    }
  } catch (error) {
    console.log("server error", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error, try again later" });
  }
};

export const login = async (req, res) => {
  res.send("login route");
};

export const logout = async (req, res) => {
  res.send("logout route");
};
