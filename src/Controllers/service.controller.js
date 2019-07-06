const { Service } = require('../Models/');
const Response = require('./Response.js');


const index = (req, res) => {
  Service.find({})
    .exec((error, services) => {
      if (error) {
        Response.error.database(res, error);
      } else {
        Response.success(res, services);
      }
    });
};


const get = (req, res) => {
  const { id } = req.params;
  Service.findById(id)
    .exec((service) => {
      Response.success(res, service);
    }).catch((error) => {
      Response.error.database(res, error);
    });
};


const store = (req, res) => {
  const serviceInfo = {};
  const {
    name, imageUrl, brief, description,
  } = req.body;
  Object.assign(serviceInfo, {
    name, imageUrl, brief, description,
  });
  const service = new Service(serviceInfo);
  service.save()
    .exec(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

module.exports = { index, get, store };
