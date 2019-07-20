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

const checkAuth = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    Response.error.authenticationError(res, new Error('No Token'));
  } else {
    const { SECRET } = process.env;
    jwt.verify(token, SECRET, (verifyError, decoded) => {
      if (verifyError || !decoded) {
        Response.error.serverError(res, verifyError || new Error('Empty decoded'));
      } else {
        Response.success(res);
      }
    });
  }
};

module.exports = { login, checkAuth };
