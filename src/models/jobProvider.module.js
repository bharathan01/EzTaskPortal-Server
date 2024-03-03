
const { model, Schema } = require("mongoose");

const jobProvider = new Schema({
  username: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hrname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});

module.exports =model('Jobproviders',jobProvider)
