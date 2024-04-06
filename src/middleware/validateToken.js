const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler");
const generateAccessAndRefreshToken = require("../utils/jwtTokenGenerator");

const validateToken = (req, res, next) => {
  try {
    const accessToken = req.cookie?.accessToken;
    if (!accessToken) {
      throw new errorHandler(401, "Unauthorized access !");
    }
    const authorizedAccessToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );
    const currentTime = Math.floor(Date.now() / 1000);

    if (authorizedAccessToken.exe < currentTime) {
      try {
        const refreshToken = req.cookie?.refreshToken;
        if (!refreshToken) {
          throw new errorHandler(401, "Unauthorized access!");
        }
        const authorizedRefershToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET_KEY
        );
        if (!authorizedRefershToken) {
          throw new errorHandler(401, "Unauthorized access!");
        }
        const payload = {
          _id: authorizedRefershToken._id,
          username: authorizedRefershToken.username,
          email: authorizedRefershToken.email,
          fullname: authorizedRefershToken.fullname,
        };
        const newAccessToken = generateAccessAndRefreshToken(
          payload,
          process.env.ACCESS_TOKEN_SECRET_KEY,
          "15m"
        );
        const options = {
          httpOnly: true,
          secure: true,
        };
        res.cookie("accessToken", newAccessToken, Option);
      } catch (error) {
        throw new errorHandler(500, "Internal server error ! try after sometime");
      }
    } else {
        next()
    }
  } catch (error) {
    throw new errorHandler(500, "Internal server error ! try after sometime");
  }
};

module.exports = validateToken