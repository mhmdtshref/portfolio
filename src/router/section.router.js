const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
    res.json({ success: true, data: { cards: [{ type: 1, details: { imgUrl: 'this is img url' } }] }});
});

module.exports = router;
