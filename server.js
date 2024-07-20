const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/users_db', {

});

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/', userRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
