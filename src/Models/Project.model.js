const { Schema, model } = require('mongoose');

const ProjectSchema = Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
  gitLink: { type: String, required: true },
  description: { type: String, required: true },
  teamWork: { type: Boolean, required: true },
});

module.exports = model('Project', ProjectSchema);
