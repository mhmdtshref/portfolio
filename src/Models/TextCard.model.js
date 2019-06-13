const { Schema, model } = require('mongoose');

const TextCardSchema = Schema({
  name: String,
  title: String,
  iconUrl: String,
  description: String,
  defaultColor: String,
  section: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
});

module.exports = model('TextCard', TextCardSchema);
