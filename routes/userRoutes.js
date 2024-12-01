const express = require('express');
const { signup, login, getProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getProfile);

module.exports = router;
