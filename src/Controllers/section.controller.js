const {
  Section, LogoCard, TextCard, PictureCard,
} = require('../Models/');
const Response = require('./Response.js');


const get = (req, res) => {
  const { id } = req.params;
  let c = 0;
  let cards = [];

  const checkFinish = counter => counter >= 3;

  const submitCards = (error, cardsToAdd, type) => {
    if (!error) {
      cards = cards.concat(cardsToAdd);
      c += 1;
      if (checkFinish(c)) {
        cards = cards.map(card => ({ type, details: card }));
        Response.success(res, { cards });
      }
    } else {
      Response.error.database(res, error);
    }
  };

  PictureCard.find({ section: id }).exec((error, cardsToAdd) => submitCards(error, cardsToAdd, 1));
  TextCard.find({ section: id }).exec((error, cardsToAdd) => submitCards(error, cardsToAdd, 2));
  LogoCard.find({ section: id }).exec((error, cardsToAdd) => submitCards(error, cardsToAdd, 3));
};

const store = (req, res) => {
  const {
    name, title, type, size, defaultColor, defaultPictureUrl,
  } = req.body;
  const section = new Section({
    name, title, type, size, defaultColor, defaultPictureUrl,
  });
  section.save()
    .then(() => {
      Response.success(res);
    })
    .catch((err) => {
      Response.error.database(res, err);
    });
};

module.exports = { get, store };
