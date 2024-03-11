const mongoose = require('mongoose');

// Define the schema for feedback details
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  feedbackText: {
    type: String,
    required: true
  },
  rating: {
   type:String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  role:{
    type:String
  }

});


const Feedback = mongoose.model('Feedback', feedbackSchema);

// Export the Feedback model
module.exports = Feedback;
