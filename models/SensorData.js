const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  sensorName: { type: String, required: true },
  sensorValue: { type: Number, required: true }
});

module.exports = mongoose.model('SensorData', sensorDataSchema);