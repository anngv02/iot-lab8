const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 *   components:
 *     schemas:
 *       User:
 *         type: object
 *         required:
 *           - userName
 *           - password
 *           - email
 *         properties:
 *           userName:
 *             type: string
 *           password:
 *             type: string
 *           email:
 *             type: string
 *         example:
 *           userName: nguyenvanA
 *           password: 123456
 *           email: user@example.com
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Quản lý người dùng
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lấy danh sách Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 *   post:
 *     summary: Tạo User mới
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref:  '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Created
 */
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update User
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref:  '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Updated
 *   delete:
 *     summary: Delete User
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 */
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;