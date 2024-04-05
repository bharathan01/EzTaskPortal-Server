const router = require("../routes/user.route.js");
const ApiResponce = require("../utils/apiResponce.js");
const errorHandler = require("../utils/errorHandler.js");
const candidatesModel = require("../models/candidate.module.js");
const candidateModule = require("../models/candidate.module.js");
const asyncTryCatchHandler = require("../utils/asyncTryCatchHandler.js");

const registerNewUser = asyncTryCatchHandler(async (req, res) => {
  const { username, fullname, password, email } = req.body;
  const fields = [username, fullname, password, email];
  if (fields.some((field) => !field || field.trim() === "")) {
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
});

const loginUser = asyncTryCatchHandler(async (req, res) => {

  const { username, email, password } = req.body;
  const userIdentifier = username ? { username } : { email };
  if (!username && !email) {
    throw new errorHandler(401, "please provide email or username");
  }
  if (!password) {
    throw new errorHandler(401, "please provide password");
  }

  const loginingUser = await candidateModule.findOne(userIdentifier);
  if (!loginingUser) {
    throw new errorHandler(400, "Invalid user creadentials.");
  }

  if (!(await loginingUser.validatePassword(password))) {
    throw new errorHandler(400, "Invalid user creadentials.");
  }
  new ApiResponce(200, loginingUser, "success", res);
});

module.exports = { registerNewUser, loginUser };
