const { Schema, model } = require('mongoose');

const ServiceSchema = Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  brief: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model('Service', ServiceSchema);
