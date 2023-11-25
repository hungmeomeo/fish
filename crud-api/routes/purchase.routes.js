const { Router } = require("express");
const { buyItem, returnItem } = require("../controller/cart.controller");

const router = Router();

// Define the route for creating a new purchase
router.post("/buyItem", buyItem);
router.get("/returnItem/:id", returnItem);

module.exports = router;
