const mongoose = require('mongoose'); //Include mongoose into the project

const commentSchema = new mongoose.Schema({
  content: { type: String },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

const stadiumSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  address: { type: String, required: true},
  team: { type: String, required: true},
  photo: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [commentSchema]
});

module.exports = mongoose.model('Stadium', stadiumSchema);
