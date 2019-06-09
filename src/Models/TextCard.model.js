const { Schema, model } = require('mongoose');

const TextCardSchema = Schema({
    name: String,
    title: String,
    logoUrl: String,
    description: String,
    defaultColor: String,
});

module.exports = model('TextCard', TextCardSchema);
