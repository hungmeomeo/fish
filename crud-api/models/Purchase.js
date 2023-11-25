const mongoose = require("mongoose");

const Cart = {
  ten_hang: { type: String, default: null },
  so_luong: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
};

const purchaseSchema = new mongoose.Schema({
  user_id: { type: String, default: null },
  date: { type: String, default: null },
  cart: [Cart],
});

const Purchase = mongoose.model("purchases", purchaseSchema);

module.exports = Purchase;
