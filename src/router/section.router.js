const express = require('express');
const { Section } = require('../Controllers/');

const router = express.Router();

router.get('/:name', Section.get);
router.post('/', Section.store);
module.exports = router;
