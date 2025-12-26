require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bài 8 API Documentation',
      version: '1.0.0',
      description: 'API quản lý SensorData và User',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Local Server',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;