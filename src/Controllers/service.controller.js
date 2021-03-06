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
    .exec((error, service) => {
      if (error) {
        Response.error.database(res, error);
      } else {
        Response.success(res, service);
      }
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
    .then(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

const del = (req, res) => {
  const { id } = req.params;
  Service.deleteOne({ _id: id })
    .then(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

const edit = (req, res) => {
  const { id } = req.params;
  const {
    name, imageUrl, brief, description,
  } = req.body;
  const updatedService = {
    name, imageUrl, brief, description,
  };

  Service.findByIdAndUpdate(id, updatedService, (error) => {
    if (error) {
      Response.error.database(res, error);
    } else {
      Response.success(res);
    }
  });
};


module.exports = {
  index, get, store, del, edit,
};
