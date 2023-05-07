var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../utils/auth');

var { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();


// Users Routes

router.get('/user', auth.authenticateJwt, userController.getUser);
router.get('/users', auth.authenticateJwt, userController.getUsers);

module.exports = router;
