const express = require('express');
const path = require('path');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const { authenticateJwt } = require('./src/utils/auth');
const connectDB = require('./src/utils/db');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
//const authRouter = require('./src/routes/auth');
//const productsRouter = require('./src/routes/products');
//const storesRouter = require('./src/routes/stores');
//const adminRouter = require('./src/routes/admin');

require('dotenv').config();

// Connect to MongoDB
connectDB();

// Connect to Prisma
const prisma = new PrismaClient();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS
const whitelist = ['http://localhost:3000']; // oder die URL deiner Frontend-Anwendung
app.use(cors({
  origin: whitelist,
  optionsSuccessStatus: 200,
  credentials: true // mitCredentials auf true setzen
}));

// Routes
app.use('/', indexRouter);
app.use('/api', usersRouter);
//app.use('/auth', authRouter);
//app.use('/products', productsRouter);
//app.use('/stores', storesRouter);
//app.use('/admin', authenticateJwt, adminRouter);

// Error handling middleware
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`--------------------------------------------\nServer started on port ${process.env.PORT}\n--------------------------------------------`.yellow);
});

module.exports = app;
