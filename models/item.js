const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
