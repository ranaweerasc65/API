const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
