const mongoose = require("mongoose");

const foodschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
        default: 'g',
    },
    calories: {
        type: Number,
        required: true,
    },
});


module.exports = mongoose.model("Food", foodschema);