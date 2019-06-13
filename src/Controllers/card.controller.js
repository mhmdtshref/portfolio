const Response = require('./Response.js');
const { PictureCard, TextCard, LogoCard } = require('../Models/');
const store = (req, res) => {
    const { type, sectionId, name, pictureUrl, defaultColor, title, logoUrl, description } = req.body;
    let card = null;

    switch (type) {
        case '1':
            card = new PictureCard({ name, pictureUrl, defaultColor, section: sectionId });
            break;

        case '2':
            card = new TextCard({ name, title, logoUrl, description, defaultColor, section: sectionId });
            break;
        case '3':
            card = new LogoCard({ name, title, pictureUrl, defaultColor, section: sectionId });
            break;
    }

    if(card){
        card.save()
            .then(() => {
                Response.success(res);
            })
            .catch((err) => {
                Response.error.database(res, err);
            });
    } else {
        Response.error.badRequest(res, new Error('Type not valid or null'));
    }
};

module.exports = { store };
