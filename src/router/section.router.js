const express = require('express');
const { Section } = require('../Controllers/');

const router = express.Router();

router.get('/:id', Section.index);

module.exports = router;
