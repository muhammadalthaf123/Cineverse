const Movie = require('../models/Movie');

// Create a Movie

exports.createMovie = async (req, res) => {
    const { title, genre, releaseDate, posterUrl, description } = req.body;
    try {
      const movie = new Movie({ title, genre, releaseDate, posterUrl, description });
      await movie.save();
      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Get All Movies
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Movie
exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genre, releaseDate, posterUrl, description } = req.body;

  try {
    const movie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, releaseDate, posterUrl, description },
      { new: true }
    );
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Movie
exports.deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
