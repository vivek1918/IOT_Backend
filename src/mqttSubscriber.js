const mqtt = require('mqtt');
const SensorReading = require('./models/SensorReading');

// Connect to MQTT broker
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
  console.log('📡 MQTT Connected');

  // Subscribe to all sensor temperature topics
  client.subscribe('iot/sensor/+/temperature', (err) => {
    if (!err) {
      console.log('✅ Subscribed to iot/sensor/+/temperature');
    }
  });
});

// When a message arrives
client.on('message', async (topic, message) => {
  try {
    console.log(`📥 MQTT Message: ${topic} -> ${message.toString()}`);

    // Extract deviceId from topic
    // iot/sensor/sensor-01/temperature
    const parts = topic.split('/');
    const deviceId = parts[2];

    const temperature = Number(message.toString());

    if (isNaN(temperature)) {
      console.log('❌ Invalid temperature');
      return;
    }

    const reading = new SensorReading({
      deviceId,
      temperature,
      timestamp: Date.now()
    });

    await reading.save();
    console.log('💾 Data saved to MongoDB');

  } catch (err) {
    console.error('MQTT Error:', err.message);
  }
});
