const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  photo: {
    type: String,
    required: true,
    default:
      'https://datasciencedegree.wisconsin.edu/wp-content/uploads/2018/09/Not-Availble.jpg'
  },
  password: {
    type: String,
    required: true
  },
  googleId: String
});

module.exports = mongoose.model('users', UserSchema);
