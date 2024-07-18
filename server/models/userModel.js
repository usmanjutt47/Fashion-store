const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Please enter a valid email address ending with @gmail.com",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 64,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
