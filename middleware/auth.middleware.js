const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.model");

const authenticate =  async(req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "You are not authenticated. Token missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //  console.log("decodeddd---->",decoded)

     const user = await UserModel.findById(decoded.userId).select("-password");
     ;
      //  console.log("userrrr",user)
    // attach userId to request object
    req.userId = decoded.userId;
    req.user = user;
    next();
  } catch (err) {
    console.error("JWT Error:", err.message);
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

module.exports = { authenticate };
