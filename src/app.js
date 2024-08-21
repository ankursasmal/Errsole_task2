const express = require('express');
const app = express();
const requestLogger = require('./middlewares/requestLogger');
const userRoutes = require('./routes/userRoutes');

 app.use(express.json());
app.use(requestLogger);  
// Routes
app.use('/api', userRoutes);

module.exports = app;
