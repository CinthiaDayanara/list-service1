const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3003;


mongoose.connect('mongodb://localhost:27017/users_db', {

});

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

app.use(express.json());

app.use('/', userRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
