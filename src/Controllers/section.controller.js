const { Section } = require('../Models/');

const index = (req, res) => {
    res.json({ success: true, data: { cards: [{ type: 1, details: { imgUrl: 'this is img url' } }] }});
};

module.exports = { index };
