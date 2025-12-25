const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

/**
 * @swagger
 *   components:
 *     schemas:
 *       SensorData:
 *         type: object
 *         required:
 *           - sensorName
 *           - sensorValue
 *         properties:
 *           id:
 *             type: string
 *             description: ID tự động của MongoDB
 *           sensorName:
 *             type: string
 *             description: Tên cảm biến
 *           sensorValue:
 *             type: number
 *             description: Giá trị đo được
 *         example:
 *           sensorName: TempSensor01
 *           sensorValue: 28.5
 */

/**
 * @swagger
 * tags:
 *   name: Sensors
 *   description: Quản lý dữ liệu cảm biến
 */

/**
 * @swagger
 * /api/sensordata:
 *   get:
 *     summary: Lấy danh sách tất cả cảm biến
 *     tags: [Sensors]
 *     responses:
 *       200:
 *         description: Danh sách sensors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SensorData'
 *   post:
 *     summary: Tạo dữ liệu cảm biến mới
 *     tags: [Sensors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorData'
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.get('/', sensorController.getAllSensors);
router.post('/', sensorController.createSensor);

/**
 * @swagger
 * /api/sensordata/{id}:
 *   put:
 *     summary: Cập nhật cảm biến theo ID
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của cảm biến
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorData'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *   delete:
 *     summary: Xóa cảm biến theo ID
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của cảm biến
 *     responses:
 *       200:
 *         description: Đã xóa thành công
 */
router.put('/:id', sensorController.updateSensor);
router.delete('/:id', sensorController.deleteSensor);

module.exports = router;