const { Schema, model } = require('mongoose');

const LogoCardSchema = Schema({
    name: String,
    title: String,
    PictureUrl: String,
    defaultColor: String,
});

module.exports = model('LogoCard', LogoCardSchema);
