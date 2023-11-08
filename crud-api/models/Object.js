const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    image: String,
    cato: String,
    sale: Boolean,
});

const Object = mongoose.model("Object", imageSchema);

module.exports = Object;
