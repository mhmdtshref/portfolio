const { Schema, model } = require('mongoose');

const PictureCardSchema = Schema({
  name: String,
  imageUrl: String,
  defaultColor: String,
  section: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
});

module.exports = model('PictureCard', PictureCardSchema);
