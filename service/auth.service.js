const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model");

const createUser = async ({ email, password, name }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new UserModel({
    email,
    name,
    password: hashedPassword,
  });
  await user.save();
  return user;
};

const validateUser = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
};

module.exports = {
  createUser,
  validateUser,
};
