const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    problem: {
        type: String,
        required: true,
    },
    improve: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("Product", productschema);