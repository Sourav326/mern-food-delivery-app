const express = require("express");
const router = express.Router();

const { restaurants } = require("../controllers/restaurantController");
const { productsOfRestro } = require("../controllers/productController");

router.get("/restaurants", restaurants);
router.get("/restaurant/:id", productsOfRestro);

module.exports = router;
