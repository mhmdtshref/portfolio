const { Language } = require('../Models/');
const Response = require('./Response.js');


const index = (req, res) => {
  Language.find({})
    .exec((error, languages) => {
      if (error) {
        Response.error.database(res, error);
      } else {
        Response.success(res, languages);
      }
    });
};


const get = (req, res) => {
  const { id } = req.params;
  Language.findById(id)
    .exec((error, language) => {
      if (error) {
        Response.error.database(res, error);
      } else {
        Response.success(res, language);
      }
    });
};


const store = (req, res) => {
  const languageInfo = {};
  const {
    name, imageUrl, link, description,
  } = req.body;
  Object.assign(languageInfo, {
    name, imageUrl, link, description,
  });
  const language = new Language(languageInfo);
  language.save()
    .then(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

module.exports = { index, get, store };
