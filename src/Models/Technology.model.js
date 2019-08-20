const { Schema, model } = require('mongoose');

const TechnologySchema = Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model('Technology', TechnologySchema);
