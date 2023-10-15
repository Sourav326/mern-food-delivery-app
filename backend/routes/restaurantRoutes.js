const express = require("express");
const router = express.Router();

const { restaurants } = require("../controllers/restaurantController");

router.get("/restaurants", restaurants);

module.exports = router;
