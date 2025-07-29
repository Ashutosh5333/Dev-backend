const express = require("express");
const {
  createProject,
  getAllProjects,
  getProjectById,
  getMyProjects,
  updateProject,
  deleteProject,
  likeProject,
  unlikeProject,
  commentOnProject,
} = require("../controllers/project.controller");

const { authenticate } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", getAllProjects);

router.post("/create", authenticate, createProject);

router.put("/comment/:projectId", authenticate, commentOnProject);

module.exports = { projectRouter: router };
