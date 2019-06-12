const { Section } = require('../Models/');
const Response = require('./Response.js');

const index = (req, res) => {
/*    const { id } = req.params;
    Section.findById(id)
        .exec((err, section) => {
            if(err){
                Response.error.database(res, err);
            } else {
                const { cards } = section;
                Response.success(res, { cards });
            }
        });*/
    Response.success(res, { cards: ['card-example-1', 'card-example-2'] });
};

module.exports = { index };
