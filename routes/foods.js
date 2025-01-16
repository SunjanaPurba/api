const express = require("express");
const router = express.Router();

const {food} = require("../controllers/foods");

router.route("/foods").get(food);

module.exports = router;