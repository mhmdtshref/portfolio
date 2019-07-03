const { Social } = require('../Models/');
const Response = require('./Response.js');

const store = (req, res) => {
  const {
    name, link, iconUrl,
  } = req.body;
  const social = new Social({
    name, link, iconUrl,
  });

  social.save()
    .then(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

module.exports = { store };
