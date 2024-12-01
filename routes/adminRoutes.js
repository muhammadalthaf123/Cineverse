const express = require('express');
const {
  getAllAdmins,
  updateAdminPermissions,
  addMovie,
  updateMovie,
  deleteMovie,
  deleteReview,
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authmiddleware');

const router = express.Router();

// Admin management
router.get('/', protect, adminOnly, getAllAdmins);
router.put('/:id/permissions', protect, adminOnly, updateAdminPermissions);

// Movie management
router.post('/movies', protect, adminOnly, addMovie);
router.put('/movies/:id', protect, adminOnly, updateMovie);
router.delete('/movies/:id', protect, adminOnly, deleteMovie);

// Review management
router.delete('/reviews/:id', protect, adminOnly, deleteReview);

module.exports = router;
