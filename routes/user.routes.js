const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getMyProfile,
  updateMyProfile,
} = require("../controllers/user.controller");
const { authenticate } = require("../middleware/auth.middleware");

router.get("/", getAllUsers);


// Authenticated user routes:
router.get("/profile/me", authenticate, getMyProfile);
router.put("/update", authenticate, updateMyProfile);


module.exports = router;
