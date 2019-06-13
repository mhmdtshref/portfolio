const express = require('express');
const { Card } = require('../Controllers/');

const router = express.Router();

router.post('/', Card.store);

module.exports = router;
