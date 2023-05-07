var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../utils/auth');

var { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(200);
});

router.post('/create', userController.createUser);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

module.exports = router;
