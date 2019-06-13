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

const store = (req, res) => {
    const { name, title, type, size, defaultColor, defaultPictureUrl } = req.body;
    const section = new Section({ name, title, type, size, defaultColor, defaultPictureUrl });
    section.save()
        .then(() => {
            Response.success(res);
        })
        .catch((err) => {
            Response.error.database(res, err);
        });
};

module.exports = { index, store };
