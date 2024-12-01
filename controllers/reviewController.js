const Review = require('../models/Review');

// Create a Review
exports.createReview = async (req, res) => {
  const { movie_id, rating, review_text } = req.body;

  try {
    const review = new Review({
      user_id: req.user._id,
      movie_id,
      rating,
      review_text,
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Reviews for a Movie
exports.getMovieReviews = async (req, res) => {
  const { movie_id } = req.params;

  try {
    const reviews = await Review.find({ movie_id });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
