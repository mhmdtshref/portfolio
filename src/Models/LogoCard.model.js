const { Schema, model } = require('mongoose');

const LogoCardSchema = Schema({
  name: String,
  title: String,
  PictureUrl: String,
  defaultColor: String,
  section: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
});

module.exports = model('LogoCard', LogoCardSchema);
