const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const { projectRouter } = require("./routes/project.routes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(bodyParser.json());

// ========== ROUTES SETUP ========== //

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/projects", projectRouter);

// Default route
app.get("/", (req, res) => {
  res.send("✅ Welcome to the Portfolio API");
});

module.exports = app;
