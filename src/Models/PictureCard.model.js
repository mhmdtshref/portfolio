const { Schema, model } = require('mongoose');

const PictureCardSchema = Schema({
    name: String,
    pictureUrl: String,
    defaultColor: String,
});

module.exports = model('PictureCard', PictureCardSchema);
