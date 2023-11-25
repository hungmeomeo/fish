const { Router } = require("express");
const { buyItem } = require("../controller/cart.controller");

const router = Router();

// Define the route for creating a new purchase
router.post("/buyItem", buyItem);

module.exports = router;
