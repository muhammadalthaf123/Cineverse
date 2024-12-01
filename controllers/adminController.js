const Admin = require('../models/admin');
const Movie = require('../models/Movie');
const Review = require('../models/Review');

// Get All Admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().populate('user_id', 'username email');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Admin Permissions
exports.updateAdminPermissions = async (req, res) => {
  const { permissions } = req.body;

  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    admin.permissions = permissions || admin.permissions;
    await admin.save();

    res.json({ message: 'Permissions updated successfully', admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a Movie
exports.addMovie = async (req, res) => {
  const { title, genre, releaseDate, posterUrl, description } = req.body;

  try {
    const movie = new Movie({ title, genre, releaseDate, posterUrl, description });
    await movie.save();
    res.status(201).json({ message: 'Movie added successfully', movie });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a Movie
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json({ message: 'Movie updated successfully', movie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Movie
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
