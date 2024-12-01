const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  permissions: {
    type: [String], // Array of permissions (e.g., ['create', 'delete', 'manage']),
    default: ['manageMovies', 'manageReviews'], // Default permissions
  },
  last_login: {
    type: Date,
    default: null,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

module.exports = mongoose.model('Admin', adminSchema);
