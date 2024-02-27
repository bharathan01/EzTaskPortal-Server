const { Shcema, Mongoose } = require("mongoose");

const candidate = new Shcema(
  {
    username: {
      type: String,
      required:true,
      unique: true,
    },
    fullname: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required:true,
      unique: true,
    },
    password: {
      type: String,
      required:true
    },
    profileimage: {
      type: String,
      required:true,
      default:''
    },
    about: {
      type: string,
      required:true
    },
    experiance: {
      type: string,
      required:true
    },
    skills: {
      type: [],
      required:true
    },
    jobrole: {
      type: string,
      require: true,
    },
    resume: {
      type: string,
      required:true
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
      required:true
    },
  },
  {
    timeStamps: true,
  }
);
