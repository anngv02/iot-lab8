require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const swaggerUI = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

const sensorRoutes = require('./routes/sensorRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json()); 

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use('/api/sensordata', sensorRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
  console.log(`Swagger UI docs tại http://localhost:${PORT}/api-docs`);
});