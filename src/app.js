const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./mqttSubscriber');


const sensorRoutes = require('./routes/sensorRoutes');

const app = express();

// Middleware to read JSON
app.use(express.json());

// Routes
app.use('/api/sensor', sensorRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

module.exports = app;
