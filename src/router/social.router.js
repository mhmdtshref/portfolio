const express = require('express');
const { Social } = require('../Controllers/');

const router = express.Router();

router.post('/', Social.store);
router.get('/', Social.get);

module.exports = router;
