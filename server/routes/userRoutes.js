const express = require("express");
const { registerController } = require("../controllers/userContoller");

const router = express.Router();

router.post("/register", registerController);

module.exports = router;
