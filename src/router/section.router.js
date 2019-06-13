const express = require('express');
const { Section } = require('../Controllers/');

const router = express.Router();

router.get('/:id', Section.get);
router.post('/', Section.store);
module.exports = router;
