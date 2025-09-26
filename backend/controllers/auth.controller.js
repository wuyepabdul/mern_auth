import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendEmail } from "../utils/nodemailer.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const clientUrl = process.env.CLIENT_URL;

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
      verificationTokenExpiresAt: Date.now() + 0.5 * 60 * 60 * 1000, //30mins,
    });

    await newUser.save();

    // jwt
    generateTokenAndSetCookie(res, newUser._id);
    // sendEmail(newUser.email, newUser.verificationToken, newUser.name, "verify");
    sendEmail(newUser, "verify", "Verify Account", clientUrl);

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
      // sendEmail(user.email, user.name, "", "welcome");
      sendEmail(user, "welcome", "Verification Successfull", clientUrl);
      return res.status(200).json({
        success: true,
        message: "Account Verified Successfully",
        user: { ...user._doc, password: undefined },
      });
    }
  } catch (error) {
    console.log("server error in verifying email", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error, try again later" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("isPasswordValid", isPasswordValid);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }

    generateTokenAndSetCookie(res, user._id);
    user.lastLogin = new Date();
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("server error in logging in", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error, try again later" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  return res
    .status(200)
    .json({ success: true, message: "Logged out successfully" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 0.5 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;
    await user.save();

    sendEmail(
      user,
      "reset",
      "Reset Password",
      `${clientUrl}/resetPassword/${resetToken}`
    );

    return res.status(200).json({
      success: true,
      message: "Reset Password Link Sent Successfully",
    });
  } catch (error) {
    console.log("server error in forgot password", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error, try again later" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired reset token" });
    }

    // update password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    sendEmail(
      user,
      "resetSuccess",
      "Password Reset Successful",
      `${clientUrl}/login`
    );

    return res
      .status(200)
      .json({ success: true, message: "Password Reset Successful" });
  } catch (error) {
    console.log("server error in reset password", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error, try again later" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("error in checkAuth: ", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};
