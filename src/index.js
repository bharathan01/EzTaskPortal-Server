const express = require("express");
require("dotenv").config();
const connectionToDb = require("./db/connectDB.js");

const port = process.env.PORT ? process.env.PORT : 8000;

const app = express();
app.use(express.json());

//created server and Connected to DataBase.
connectionToDb()
  .then(() => {
    app.listen(port, () => {
      console.log("server is connected..");
    });
  })
  .catch((error) => {
    console.log("Can not connected to DataBase..!", error);
  });
