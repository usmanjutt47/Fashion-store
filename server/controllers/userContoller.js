const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { comparePassword } = require("../helpers/authHelper");
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { authenticator } = require("otplib");

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

    // Check if the email exists in the database
    const user = await userModel.findOne({ email: userEmail });
    if (!user) {
      return res.status(400).json({
        success: false,
        message:
          "Email address not found in database. Please provide a valid email address.",
      });
    }

    // Generate a 4-digit OTP
    authenticator.options = { digits: 4 }; // Set OTP length to 4 digits
    const otp = authenticator.generate(userEmail); // Use email as secret or a secure way to generate OTP
    user.otp = otp; // Save OTP in the user model or cache
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Customized welcome email
    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 20px;
            }
            .container {
              background-color: #fff;
              border-radius: 8px;
              padding: 20px;
              max-width: 600px;
              margin: auto;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            h1 {
              color: #333;
            }
            p {
              font-size: 16px;
              line-height: 1.5;
            }
            .footer {
              font-size: 14px;
              color: #777;
              margin-top: 20px;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              color: #fff;
              background-color: #007bff;
              text-decoration: none;
              border-radius: 4px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to Fashion Store, ${user.name}!</h1>
            <p>Hello ${user.name},</p>
            <p>Thank you for joining Fashion Store! We’re excited to have you on board. Start exploring our range of fashion products and enjoy exclusive offers.</p>
            <p>Here is your One-Time Password (OTP) to verify your email address:</p>
            <h2 style="font-size: 24px; color: #007bff;">${otp}</h2>
            <p>If you did not request this, please ignore this email.</p>
            <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
            <div class="footer">
              <p>Best regards,</p>
              <p>The Fashion Store Team</p>
              <p>Contact us at: <a href="mailto:usmanjutt04747@gmail.com">usmanjutt04747@gmail.com</a> or <a href="mailto:fahadayyaz31@gmail.com">fahadayyaz31@gmail.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send welcome email
    const info = await transporter.sendMail({
      from: `"Fashion Store" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Welcome to Fashion Store",
      text: `Hello and welcome to our app! We're glad to have you with us. Your OTP is ${otp}.`,
      html: htmlContent,
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
