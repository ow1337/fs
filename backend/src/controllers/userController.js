// backend/controllers/userController.js
const bcrypt = require('bcrypt');
const auth = require('../utils/auth');
var { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();
/* -------------------------------------------------
    USER AUTH
---------------------------------------------------*/
exports.createUser = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
        },
      });
      const token = auth.generateToken(user); // Use the generateToken function from auth.js
      res.status(201).json({
        message: 'User created successfully',
        token: token,
        userId: user.id,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    console.log('/backend/controllers/userController.js --- login(); req.body: ',req.body);
    try {
      // Find user by username
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) {
        return res.status(404).send('Invalid username or password.');
      }
  
      // Check password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(404).send('Invalid username or password.');
      }
  
      // Generate JWT token
      const token = auth.generateToken(user);
  
      // Set token as cookie and send response
      res.cookie('token', token, { httpOnly: true });
      res.status(201).json({
        message: 'User Logged in succesfully.',
        token: token,
        userId: user.id
      
      })
      console.log('/backend/controllers/userController.js --- login(); req.body: ',token);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  exports.logout = (req, res) => {
    // Clear token cookie
    res.clearCookie('token');
  
    // Send response
    res.send({ message: 'Logged out successfully.' });
  };

/* -------------------------------------------------
    USER CRUD
---------------------------------------------------*/

exports.getUsers = async (req, res, next) => {
    try {
      const users = await prisma.user.findMany();
      res.send(users);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  exports.getUser = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      console.log("userId:", userId); // hier hinzufügen
      const user = await prisma.user.findUnique({
        where: {
          id: userId
        }
      });
      res.send(user);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  
  
  
  
  
  
