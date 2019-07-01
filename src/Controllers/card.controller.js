const Response = require('./Response.js');
const { PictureCard, TextCard, LogoCard } = require('../Models/');

const store = (req, res) => {
  const {
    type, sectionId, name, imageUrl, defaultColor, title, iconUrl, description,
  } = req.body;
  let card = null;

  switch (type) {
    case '1':
    case '4':
      card = new PictureCard({
        name, imageUrl, defaultColor, section: sectionId,
      });
      break;

    case '2':
      card = new TextCard({
        name, title, iconUrl, description, defaultColor, section: sectionId,
      });
      break;
    case '3':
      card = new LogoCard({
        name, title, imageUrl, defaultColor, section: sectionId,
      });
      break;
    default:
  }

  if (card) {
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
