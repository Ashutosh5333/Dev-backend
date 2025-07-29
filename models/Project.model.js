const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      maxlength: 1000,
    },
    links: {
      type: [String],
      default: [],
    },
    pic: {
      type: [String],
      default: [],
    },
    userId: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],

    comments: [
      {
        text: {
          type: String,
          required: true,
          maxlength: 300,
        },
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", 
        },
      },
    ],

    postedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = { ProjectModel };
