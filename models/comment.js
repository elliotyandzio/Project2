const mongoose = require('mongoose'); //Include mongoose into the project

const commentSchema = new mongoose.Schema({
  content: { type: String },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Comment', commentSchema);
