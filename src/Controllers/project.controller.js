const { Project } = require('../Models/');
const Response = require('./Response.js');


const index = (req, res) => {
  Project.find({})
    .exec((error, projects) => {
      if (error) {
        Response.error.database(res, error);
      } else {
        Response.success(res, projects);
      }
    });
};


const get = (req, res) => {
  const { id } = req.params;
  Project.findById(id)
    .exec((project) => {
      Response.success(res, project);
    }).catch((error) => {
      Response.error.database(res, error);
    });
};


const store = (req, res) => {
  const projectInfo = {};
  const {
    name, imageUrl, link, gitLink, description, teamWork,
  } = req.body;
  Object.assign(projectInfo, {
    name, imageUrl, link, gitLink, description, teamWork,
  });
  const project = new Project(projectInfo);
  project.save()
    .exec(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

module.exports = { index, get, store };
