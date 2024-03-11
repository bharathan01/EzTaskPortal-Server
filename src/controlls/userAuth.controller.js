const router = require("../routes/user.route.js");
const { ApiResponse } = require("../utils/apiResponce.js");
const errorHandler = require("../utils/errorHander.js");

const registerNewUser = (req, res) => {
  try {
    const body = req.body;
    if (!body.email) {
      throw new errorHandler(400, "email is require");
    }
    const data = new ApiResponse(200,body,"email is obtained");
  } catch (error) {
     return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = registerNewUser;
