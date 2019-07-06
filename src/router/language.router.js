const express = require('express');
const { Language } = require('../Controllers/');

const router = express.Router();

router.get('/', Language.index);
router.get('/:id', Language.get);
router.post('/', Language.store);

module.exports = router;
