const express = require('express');
const { Social } = require('../Controllers/');

const router = express.Router();

router.post('/', Social.store);

module.exports = router;
