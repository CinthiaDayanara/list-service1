const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Endpoint para obtener todos los usuarios
router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); // Encuentra todos los usuarios
    res.json(users); // Envía los usuarios como JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
