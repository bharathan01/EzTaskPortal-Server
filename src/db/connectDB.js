const mongoose = require("mongoose");
const { mongoDbConnectionUrl } = require("../constance.js");

const connectionToDb = async () => {
  try {
    const connectedToDb = await mongoose.connect(mongoDbConnectionUrl);
    console.log(
      "DataBase Connected Successfully!! DB_HOST :",
     connectedToDb.connection.host
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILD > ", error);
    process.exit(1);
  }
};

module.exports = connectionToDb;
