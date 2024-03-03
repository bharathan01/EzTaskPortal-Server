const { Schema, model } = require('mongoose');

const experienceDetailsSchema = new Schema({
  candidateId: {
    type: Schema.Types.ObjectId,
    ref: 'candidates',
    required: true,
  },
  expDetails: {
    type: [
      {
        company: {
          type: String,
          required: true,
        },
        positionName: {
          type: String,
          required: true,
        },
        StartDate: {
          type: String,
          required: true,
        },
        EndDate: {
          type: String,
          required: true,
        },
      }
    ],
    required: true,
  },
  aboutTheRole:{
    type:String,
    required:true
  }
});

module.exports = model('experienceDetailsSchemas', experienceDetailsSchema);
