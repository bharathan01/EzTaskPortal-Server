const { Schema, model } = require("mongoose");

const educationDetailsSchema = new Schema({
  candidateId: {
    type: Schema.Types.ObjectId,
    ref: "candidates",
    required: true,
  },
  eduDetails: {
    type: [
      {
        course: {
          type: String,
          required: true,
        },
        collegeName: {
          type: String,
          required: true,
        },
        courseStartDate: {
          type: String,
          required: true,
        },
        courseEndDate: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = model("educationDetails", educationDetailsSchema);
