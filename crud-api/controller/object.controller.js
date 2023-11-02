const Object = require("../models/Object");

const getObject = async (req, res) => {
    const ids = req.params.id.split(';');

    // Validate IDs (check format, sanitize, etc)

    const validIds = ids.map(id => parseInt(id));

    // Query database
    const images = await Object.find({ 
        id: { $in: validIds } 
    });

    res.json(images);
}

module.exports = {
  getObject,
};
