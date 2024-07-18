const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation error
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "Email already exists",
      });
    }

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password,  // Storing password as plain text (not recommended)
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

module.exports = registerController;
