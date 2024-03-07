const router = require("../routes/user.route.js");
const errorHandler = require("../utils/errorHander.js");

const registerNewUser = async (req, res) => {
 
    const body = req.body;
    if (!body.email) {
      throw new errorHandler(400, "email is require");
    }
    return res.status(200).json(body)
};

module.exports = registerNewUser;
