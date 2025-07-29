const { UserModel } = require("../models/User.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
};

// 👇 New controller for current user
const getMyProfile = async (req, res) => {
  // console.log("reqqq user profile ----->",req.user)
  try {
    res.status(200).json(req.user); // req.user set by middleware
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting profile" });
  }
};

// 👇 New update controller for current user
const updateMyProfile = async (req, res) => {
  const userId = req.userId;
  //  console.log("update profile--->",userId)

  try {
    const updated = await UserModel.findByIdAndUpdate(req.userId, req.body, {
      new: true,
    }).select("-password");

    res.status(200).json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating profile" });
  }
};

module.exports = {
  getAllUsers,
  getMyProfile,
  updateMyProfile,
};
