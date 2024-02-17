var mongoose = require('mongoose');

const departentSchema = new mongoose.Schema({
    D_name: {
      type: String,
      required: true,
    },
    D_user:{
        type: String,
        requied: true
    },
    project: {
        type: String,
        requied: true
    }
  })
  
  const Department = mongoose.model("Department", departentSchema);
  
  module.exports = Department;