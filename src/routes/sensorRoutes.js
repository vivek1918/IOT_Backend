const express = require('express');
const router = express.Router();
const SensorReading = require('../models/SensorReading');

/**
 * POST /api/sensor/ingest
 */
router.post('/ingest', async (req, res) => {
  try {
    const { deviceId, temperature, timestamp } = req.body;

    // Validation
    if (!deviceId || temperature === undefined) {
      return res.status(400).json({
        error: 'deviceId and temperature are required'
      });
    }

    const reading = new SensorReading({
      deviceId,
      temperature,
      timestamp: timestamp || Date.now()
    });

    await reading.save();

    res.status(201).json({
      message: 'Sensor data saved successfully',
      data: reading
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/sensor/:deviceId/latest
 */
router.get('/:deviceId/latest', async (req, res) => {
  try {
    const { deviceId } = req.params;

    const latestReading = await SensorReading
      .findOne({ deviceId })
      .sort({ timestamp: -1 });

    if (!latestReading) {
      return res.status(404).json({
        error: 'No data found for this device'
      });
    }

    res.json(latestReading);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
