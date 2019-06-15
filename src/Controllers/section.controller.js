const {
  Section, LogoCard, TextCard, PictureCard,
} = require('../Models/');
const Response = require('./Response.js');


const get = (req, res) => {
  const { name } = req.params;
  let c = 0;
  let cards = [];
  let type = null;

  const checkFinish = counter => counter >= 3;

  const submitCards = (error, cardsToAdd, cardsType) => {
    if (!error) {
      type = cardsToAdd.length > 0 ? cardsType : type;
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

  console.log("NAME: ", name, "IN LOWER: ", name.toLowerCase());

  Section.findOne({ name: name.toLowerCase() }).exec((error, sectionResult) => {
    if(!error && sectionResult){
      PictureCard.find({ section: sectionResult.id }).exec((error, cardsToAdd) => submitCards(error, cardsToAdd, 1));
      TextCard.find({ section: sectionResult.id }).exec((error, cardsToAdd) => submitCards(error, cardsToAdd, 2));
      LogoCard.find({ section: sectionResult.id }).exec((error, cardsToAdd) => submitCards(error, cardsToAdd, 3));
    } else {
      Response.error.badRequest(res, error || new Error('Section Not Found!'));
    }
  });
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
