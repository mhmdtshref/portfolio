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

  const submitCards = (error, cardsToAdd, cardsType, section) => {
    if (!error) {
      type = cardsToAdd.length > 0 ? cardsType : type;
      cards = cards.concat(cardsToAdd);
      c += 1;
      if (checkFinish(c)) {
        cards = cards.map(card => ({ type, details: card }));
        Response.success(res, { section, cards });
      }
    } else {
      Response.error.database(res, error);
    }
  };

  Section.findOne({ name: name.toLowerCase() }).exec((sectionError, sectionResult) => {
    if (!sectionError && sectionResult) {
      PictureCard.find({ section: sectionResult.id })
        .exec((error, cardsToAdd) => submitCards(error, cardsToAdd, sectionResult.type, sectionResult));

      TextCard.find({ section: sectionResult.id })
        .exec((error, cardsToAdd) => {
          submitCards(error, cardsToAdd, 2, sectionResult);
        });

      LogoCard.find({ section: sectionResult.id })
        .exec((error, cardsToAdd) => {
          submitCards(error, cardsToAdd, 3, sectionResult);
        });
    } else {
      Response.error.badRequest(res, sectionError || new Error('Section Not Found!'));
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
