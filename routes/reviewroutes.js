const express = require('express');
const { createReview, getMovieReviews } = require('../controllers/reviewController');
const { protect } = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/', protect, createReview);
router.get('/:movie_id', getMovieReviews);

module.exports = router;
