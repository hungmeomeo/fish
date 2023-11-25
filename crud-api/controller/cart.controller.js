const Purchase = require("../models/Purchase");

const buyItem = async (req, res, next) => {
  try {
    const { user_id, cart } = req.body;

    // Validate incoming data
    if (!user_id || !cart || !Array.isArray(cart)) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    // Create a new Purchase document
    const newPurchase = new Purchase({ user_id, date: formattedDate, cart });

    // Save the document to the database
    const savedPurchase = await newPurchase.save();

    res.status(201).json(savedPurchase);
  } catch (error) {
    // Pass the error to the next middleware (error-handling middleware)
    next(error);
  }
};

module.exports = {
  buyItem,
};
