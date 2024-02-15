const { Shcema, Mongoose, Schema } = require("mongoose");

const candidate = new Shcema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profileimage: {
      type: String,
    },
    about: {
      type: string,
    },
    experiance: {
      type: string,
    },
    skills: {
      type: [],
    },
    jobrole: {
      type: string,
      require: true,
    },
    resume: {
      type: string,
      require: true,
    },
    appliedJob: [
      {
        type: Schema.Types.ObjectId,
        ref: "jobsDetails",
        status: {
          type: string,
          enum: ["Apply", "In Progress", "Rejected"],
          default: "Apply",
        },
      },
    ],
    refreshtoken: {
      type: string,
    },
  },
  {
    timeStamps: true,
  }
);
