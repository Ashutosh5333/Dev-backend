const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  image: {
    type: String,
    default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },


  bio: {
    type: String,
    trim: true,
    maxlength: 300,
    default: "Hey there! I'm using this platform to share my work and connect.",
  },
  socialLinks: {
    github: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    website: { type: String, trim: true },
    twitter: { type: String, trim: true },
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
