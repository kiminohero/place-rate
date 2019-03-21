const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    max: 5,
    min: 0,
    required: true
  },
  postedOn: {
    type: Date,
    default: Date.now()
  },
  image: {
    type: String,
    default: '',
    trim: true
  },
  likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'users' }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true,
        trim: true
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = mongoose.model('posts', PostSchema);
