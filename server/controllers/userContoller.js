const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { comparePassword } = require("../helpers/authHelper");
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// register Controller
const registerController = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }
    if (password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      return res.status(400).send({
        success: false,
        message: "Please provide a valid Email address",
      });
    }

    if (password.length > 64) {
      return res.status(400).send({
        success: false,
        message: "Password must be less than 64 characters",
      });
    }

    const existingUserByEmail = await userModel.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    const existingUserByPhone = await userModel.findOne({ phone });
    if (existingUserByPhone) {
      return res.status(400).send({
        success: false,
        message: "Phone number already registered",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).send({
      success: false,
      message: "An error occurred while registering user",
      error,
    });
  }
};

// login controller
const loginController = async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    if ((!email && !phone) || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide email or phone, and password",
      });
    }

    let user;
    if (email) {
      user = await userModel.findOne({ email });
    } else if (phone) {
      user = await userModel.findOne({ phone });
    }

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User dosn't exist",
      });
    }

    // Match passwords
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Invalid email/phone or password",
      });
    }
    // JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // undefined password
    user.password = undefined;
    return res.status(200).send({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in login controller",
      error,
    });
  }
};

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
const sendWelcomeEmail = async (req, res) => {
  try {
    const userEmail = req.body.email;

    // Validate email
    if (!validateEmail(userEmail)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email address." });
    }

    // Create transport for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send welcome email
    const info = await transporter.sendMail({
      from: `"Fashion Store" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Welcome to Fashion Store",
      text: `Hello and welcome to our app! We're glad to have you with us.`,
      html: `<p>Hello and welcome to our app! We're glad to have you with us.</p>`,
    });

    console.log("Welcome email sent: %s", info.messageId);

    res
      .status(200)
      .json({ success: true, message: "Welcome email sent to your email." });
  } catch (error) {
    console.error("Error in sending welcome email:", error);
    return res.status(500).json({
      success: false,
      message: "Error in sending welcome email.",
      error,
    });
  }
};

module.exports = { registerController, loginController, sendWelcomeEmail };
