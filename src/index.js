const express = require("express");
require("dotenv").config();
const connectionToDb = require("./db/connectDB.js");
const errorHandler = require("./utils/errorHanderSwitch.js");

const port = process.env.PORT ? process.env.PORT : 8000;

const app = express();
app.use(express.json());

app.use(errorHandler)


app.post("/",(req,res)=>{
  const data = req.body 
    if(!data.email){
      throw new Error("email is required")
    }
    res.status(200).json(data) 
})
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
