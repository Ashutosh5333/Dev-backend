const express = require("express");
const { body } = require("express-validator");
const { signupUser, loginUser } = require("../controllers/auth.controller");

const router = express.Router();

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars"),
    body("name").notEmpty().withMessage("Name is required"),
  ],
  signupUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

module.exports = router;
