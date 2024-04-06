const router = require("../routes/user.route.js");
const ApiResponce = require("../utils/apiResponce.js");
const errorHandler = require("../utils/errorHandler.js");
const candidatesModel = require("../models/candidate.module.js");
const candidateModule = require("../models/candidate.module.js");
const asyncTryCatchHandler = require("../utils/asyncTryCatchHandler.js");
const generateAccessAndRefreshToken = require("../utils/jwtTokenGenerator.js");

const userWithoutSensitiveInfo = (userInfo) => {
  const { refreshToken, password, ...nonSensitiveUserInfo } = userInfo._doc;
  return nonSensitiveUserInfo;
};

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
    throw new errorHandler(500, "can't register new user, try after sometime");
  }
  const userInfo = userWithoutSensitiveInfo(user)
  new ApiResponce(200, userInfo, "user created successfully", res);
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

  const loginUser = await candidateModule.findOne(userIdentifier);
  if (!loginUser) {
    throw new errorHandler(400, "Invalid user creadentials.");
  }
  if (!(await loginUser.validatePassword(password))) {
    throw new errorHandler(400, "Invalid user creadentials.");
  }
  const userInfo = userWithoutSensitiveInfo(loginUser);
  const playloadForToken = {
    _id: loginUser._id,
    username: loginUser.username,
    email: loginUser.email,
    fullname: loginUser.fullname,
  };

  const accessToken = generateAccessAndRefreshToken(
    playloadForToken,
    process.env.ACCESS_TOKEN_SECRET_KEY,
    "15m"
  );
  const refreshToken = generateAccessAndRefreshToken(
    playloadForToken,
    process.env.REFRESH_TOKEN_SECRET_KEY,
    "1d"
  );
  userInfo.accessToken = accessToken;
  userInfo.refreshToken = refreshToken;

  new ApiResponce(200, userInfo, "success", res);
});

module.exports = { registerNewUser, loginUser };
