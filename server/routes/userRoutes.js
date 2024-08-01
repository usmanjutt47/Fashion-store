const express = require("express");
const {
  registerController,
  loginController,
  sendOTP,
  sendWelcomeEmail,

} = require("../controllers/userContoller");

const router = express.Router();

// register route
router.post("/register", registerController);

// login route
router.post("/login", loginController);

router.post("/sendOTP", sendWelcomeEmail);

module.exports = router;
