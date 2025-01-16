const Food = require("../models/food");

const food = async(req, res) => {
    const myData = await Food.find(req.query);
    res.status(200).json({ myData });
};

module.exports = {food};