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
    .exec((error, project) => {
      if (error) {
        Response.error.database(res, error);
      } else {
        Response.success(res, project);
      }
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
    .then(() => {
      Response.success(res);
    })
    .catch((error) => {
      Response.error.database(res, error);
    });
};

const del = (req, res) => {
  const { id } = req.params;
  Project.deleteOne({ _id: id })
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
    name, link, gitLink, imageUrl, teamWork, description,
  } = req.body;
  const updatedProject = {
    name, link, gitLink, imageUrl, teamWork, description,
  };

  Project.findByIdAndUpdate(id, updatedProject, (error) => {
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
