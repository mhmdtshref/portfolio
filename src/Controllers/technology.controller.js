const { Technology } = require('../Models/');
const Response = require('./Response.js');


const index = (req, res) => {
  Technology.find({})
    .exec((error, technologies) => {
      if (error) {
        Response.error.database(res, error);
      } else {
        Response.success(res, technologies);
      }
    });
};


const get = (req, res) => {
  const { id } = req.params;
  Technology.findById(id)
    .exec((technology) => {
      Response.success(res, technology);
    }).catch((error) => {
      Response.error.database(res, error);
    });
};


const store = (req, res) => {
  const technologyInfo = {};
  const {
    name, imageUrl, link, description,
  } = req.body;
  Object.assign(technologyInfo, {
    name, imageUrl, link, description,
  });
  const technology = new Technology(technologyInfo);
  technology.save()
    .exec(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

module.exports = { index, get, store };
