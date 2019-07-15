const express = require('express');
const { Project } = require('../Controllers/');

const router = express.Router();

router.get('/', Project.index);
router.get('/:id', Project.get);
router.post('/', Project.store);
router.delete('/:id', Project.del);

module.exports = router;
