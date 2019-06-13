const { Schema, model } = require('mongoose');

const SocialSchema = Schema({
  name: String,
  iconUrl: String,
  link: String,
});

module.exports = model('Social', SocialSchema);
