const express = require('express');
const { Auth } = require('../Controllers/');

const router = express.Router();

router.post('/login', Auth.login);
router.get('/checkAuth', Auth.checkAuth);

module.exports = router;
