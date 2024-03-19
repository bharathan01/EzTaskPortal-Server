const router = require("../routes/user.route.js");
const ApiResponce = require("../utils/apiResponce.js");
const errorHandler = require("../utils/errorHander.js");
const candidatesModel = require("../models/candidate.module.js");

const registerNewUser = async (req, res) => {
  try {
    const { username, fullname, password, email } = req.body;
    const fields = [username, fullname, password, email]
    if (fields.some((field) => !field || field.trim()==="")){
      throw new errorHandler(400, "all fields are require");
    }
    const user = await candidatesModel.create({
      username,
      fullname,
      password,
      email,
    });
    if (!user) {
      throw new errorHandler(401, "user not created");
    }
    new ApiResponce(200, user, "user created successfully", res);
  } catch (error) {
    throw new errorHandler(500, error.message);
    // return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const loginUser = (req, res) => {
  new ApiResponce(200, "data0", "loguser", res);
};

module.exports = { registerNewUser, loginUser };
