const { Section, LogoCard, TextCard, PictureCard } = require('../Models/');
const Response = require('./Response.js');


const get = (req, res) => {
    const { id } = req.params;
    let c = 0;
    let cards = [];

    const checkFinish = counter => counter >= 3;

    const submitCards = (error, cardsToAdd) => {
        if(!error){
            cards = cards.concat(cardsToAdd);
            if(checkFinish(++c)){
                Response.success(res, { cards });
            };
        } else {
            Response.error.database(res, error);
        }
    };

    LogoCard.find({ section: id }).exec(submitCards);
    TextCard.find({ section: id }).exec(submitCards);
    PictureCard.find({ section: id }).exec(submitCards);
};

const store = (req, res) => {
    const { name, title, type, size, defaultColor, defaultPictureUrl } = req.body;
    const section = new Section({ name, title, type, size, defaultColor, defaultPictureUrl });
    section.save()
        .then(() => {
            Response.success(res);
        })
        .catch((err) => {
            Response.error.database(res, err);
        });
};

module.exports = { get, store };
