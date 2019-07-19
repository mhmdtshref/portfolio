const jwt = require('jsonwebtoken');
const Response = require('./Response');
require('env2')('config.env');

const login = (req, res) => {
  const { username, password } = req.body;
  if (process.env.USERNAME === username && process.env.PASSWORD === password) {
    jwt.sign({ id: process.env.id }, process.env.SECRET, (signError, token) => {
      if (signError || !token) {
        Response.error.serverError(res, new Error('Creating Token Error!'));
      } else {
        Response.success(res, { token });
      }
    });
  } else {
    Response.error.badRequest(res, new Error('Unauthenticated'));
  }
};

module.exports = { login };
