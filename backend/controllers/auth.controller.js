import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

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

export const login = async (req, res) => {
  res.send("login route");
};

export const logout = async (req, res) => {
  res.send("logout route");
};
