require("dotenv").config();

const mongoDbConnectionUrl = 
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.n30udmt.mongodb.net/${process.env.DB_NAME}`;

module.exports = {
  mongoDbConnectionUrl,
};
