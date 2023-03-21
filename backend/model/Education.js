const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    type: {
      type: String,
      required: true
    },
    Age: {
      type: Number,
      required: true
    },
    Status: {
      type: String,
      required: true
    },
    Specialists: {
      type: String,
      required: true
    },
    Reports: {
      type: String,
      required: true
    },
  });
  
  module.exports = mongoose.model("Education", EducationSchema);