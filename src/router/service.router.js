const express = require('express');
const { Service } = require('../Controllers/');

const router = express.Router();

router.get('/', Service.index);
router.get('/:id', Service.get);
router.post('/', Service.store);

module.exports = router;
