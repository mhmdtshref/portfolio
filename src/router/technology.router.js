const express = require('express');
const { Technology } = require('../Controllers/');

const router = express.Router();

router.get('/', Technology.index);
router.get('/:id', Technology.get);
router.post('/', Technology.store);

module.exports = router;
