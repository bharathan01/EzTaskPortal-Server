const router = require("../routes/user.route.js");
const ApiResponce = require("../utils/apiResponce.js");
const errorHandler = require("../utils/errorHander.js");

const registerNewUser = (req, res) => {
  try {
    const body = req.body;
    if (!body.email) {
      throw new errorHandler(400, "email is require");
    }
    new ApiResponce(200, body, "email is obtained", res);
  } catch (error) {
    throw new errorHandler(500, error.message);
    // return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = registerNewUser;
