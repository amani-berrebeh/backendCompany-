const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  message: String,
  photo:String,
  pdf:String
}, {
  timestamps: true
});

module.exports = mongoose.model('note', noteSchema);