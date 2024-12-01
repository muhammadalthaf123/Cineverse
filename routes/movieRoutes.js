const express = require('express');
const { createMovie, getMovies, updateMovie, deleteMovie } = require('../controllers/movieController');
const { protect, adminOnly } = require('../middleware/authmiddleware');

const router = express.Router();

router.route('/').get(getMovies).post(protect, adminOnly, createMovie);
router.route('/:id').put(protect, adminOnly, updateMovie).delete(protect, adminOnly, deleteMovie);

module.exports = router;
