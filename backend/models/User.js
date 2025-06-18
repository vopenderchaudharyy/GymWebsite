const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
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
  hasJoined: {
    type: Boolean,
    default: false,
  },
  phone: String,
  dob: Date,
  gender: String,
  membership: String,
  workoutTime: String,
  fitnessGoals: [String],
  emergencyContact: String,
  photo: String,
  termsAgreed: Boolean,
});

module.exports = mongoose.model('User', userSchema);