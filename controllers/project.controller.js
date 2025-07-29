const { ProjectModel } = require("../models/Project.model");

// Create a new project
const createProject = async (req, res) => {
  const userId = req.body.userId;

  try {
    const newProject = new ProjectModel({
      ...req.body,
      postedBy: userId,
    });

    await newProject.save();
    res
      .status(201)
      .json({ msg: "Project created successfully", project: newProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error creating project" });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find()
      .populate("postedBy", "name email image username")
      .populate("comments.postedBy", "name _id image username")
      .sort({ createdAt: -1 });
    // console.log("get Alll projects=====>", projects);
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching projects" });
  }
};



const commentOnProject = async (req, res) => {
  //  console.log("commentttt---->")
  const userId =  req.userId; // ✅ if using authMiddleware
  const projectId = req.params.projectId;
  const { text } = req.body;

  try {
    await ProjectModel.findByIdAndUpdate(
      projectId,
      { $push: { comments: { text, postedBy: userId } } },
      { new: true }
    );
    // 🔁 Refetch with full population
    const populatedProject = await ProjectModel.findById(projectId)
      .populate("postedBy", "name _id image username")
      .populate("comments.postedBy", "name _id image username");

    res.status(200).json(populatedProject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error commenting on project" });
  }
};


module.exports = {
  createProject,
  getAllProjects,
  commentOnProject,
};

