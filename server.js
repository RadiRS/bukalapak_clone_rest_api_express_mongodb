const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const products = require('./routes/api/products');
const orders = require('./routes/api/orders');

const app = express();

// Body parse middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/v1/users', users);
app.use('/api/v1/profile', profile);
app.use('/api/v1/products', products);
app.use('/api/v1/orders', orders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
