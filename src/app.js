const express = require("express");
const userRouter = require("./routes/user.route");
const errorHander = require("./utils/errorHandler.js");
const error = require("./middleware/error.js")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v2/users", userRouter);


// for unautherized url
app.all("*", (req, res) => {
  throw new errorHander(400, "page not found..!");
});
app.use(error)

module.exports = app;
