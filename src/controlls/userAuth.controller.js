const router = require("../routes/user.route.js");
const errorHandler = require("../utils/errorHander.js");

const registerNewUser = (req, res) => {
  try {
    const body = req.body;
    if (!body.email) {
      throw new errorHandler(400, "email is require");
    }
    return res.status(200).json(body);
  } catch (error) {
     return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = registerNewUser;
