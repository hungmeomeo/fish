const User = require("../models/User");
// const registerUser = require("../controller/register.controller");
const {
  loginUser,
  logoutUser,
  registerUser,
} = require("../controller/auth.controller");
const authenticateUser = require("../middleware/auth");
const { Router } = require("express");
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authenticateUser, logoutUser);

module.exports = router;
