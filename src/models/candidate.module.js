const { Schema, model } = require("mongoose");
const { hashPassword } = require("../utils/passwordHash");
const errorHandler = require("../utils/errorHander");

const candidateSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileimage: {
      type: String,
      // required: true,
      // default: '',
    },
    about: {
      type: String, 
  
    },
    experience: {
      type: String, 

    },
    skills: {
      type: [String], 
    },
    jobrole: {
      type: String,
    },
    educationDetails: {
      type: [String], 
    },
    resume: {
      type: String,
    },
    appliedJob: [
      {
        type: Schema.Types.ObjectId,
        ref: "jobsDetails",
        status: {
          type: String, 
          enum: ["Apply", "In Progress", "Rejected"],
          default: "Apply",
        },
      },
    ],
    refreshToken: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true, 
  }
);

candidateSchema.pre('save',async function (next){
   if(!this.isModified('password')) return next()
   try{
    this.password = await hashPassword(this.password);
  }catch(error){
     throw new errorHandler(500, error.message)
  }
})

module.exports = model("candidates", candidateSchema);
