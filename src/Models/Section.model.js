const { Schema, model } = require('mongoose');

const SectionSchema = Schema({
  name: String,
  title: String,
  type: String,
  size: Number,
  defaultColor: String,
  defaultPictureUrl: String,
});

module.exports = model('Section', SectionSchema);
