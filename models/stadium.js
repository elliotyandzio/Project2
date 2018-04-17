const mongoose = require('mongoose'); //Include mongoose into the project

const stadiumSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  address: { type: String, required: true},
  team: { type: String, required: true},
  photo: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Stadium', stadiumSchema);
