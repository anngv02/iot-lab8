const SensorData = require('../models/SensorData');

exports.getAllSensors = async (req, res) => {
  try {
    const data = await SensorData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSensor = async (req, res) => {
  const sensor = new SensorData({
    sensorName: req.body.sensorName,
    sensorValue: req.body.sensorValue
  });
  try {
    const newSensor = await sensor.save();
    res.status(201).json(newSensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateSensor = async (req, res) => {
  try {
    const updatedSensor = await SensorData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSensor = async (req, res) => {
  try {
    await SensorData.findByIdAndDelete(req.params.id);
    res.json({ message: 'Đã xóa SensorData thành công' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};