const express = require("express");
const userRouter = require("./routes/user.route");
const errorHander = require("./utils/errorHander.js");
const errorHandlerSwitch = require("./utils/errorHanderSwitch.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v2/users", userRouter);


// for unautherized url
app.all("*", (req, res) => {
  throw new errorHander(400, "page not found..!");
});
app.use(errorHandlerSwitch)

module.exports = app;
