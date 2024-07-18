const { hashPassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser = new userModel({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "An error occurred while registering user",
      error,
    });
  }
};

module.exports = { registerController };
