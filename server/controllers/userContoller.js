const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
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

    const newUser = new userModel({
      name,
      email,
      phone,
      password,
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

module.exports = { registerController }
