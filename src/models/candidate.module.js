const { Schema, model } = require("mongoose");

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
      required: true,
      default: '',
    },
    about: {
      type: String, 
      required: true,
    },
    experience: {
      type: String, 
      required: true,
    },
    skills: {
      type: [String], 
      required: true,
    },
    jobrole: {
      type: String,
      required: true,
    },
    educationDetails: {
      type: [String], 
      required: true,
    },
    resume: {
      type: String,
      required: true,
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
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = model("candidates", candidateSchema);
