const express = require('express');
const { ContactUs } = require('../Controllers/');

const router = express.Router();

router.post('/', ContactUs.send);

module.exports = router;
