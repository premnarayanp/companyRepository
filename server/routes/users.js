//const express = require('express');
//const passport = require('passport');

import express from 'express';
import passport from 'passport';

const router = express.Router();

// const userController = require('../controllers/users_controller');
// router.post('/signup', userController.create);
// router.post('/login', userController.createJWTSession);

import userController from '../controllers/users_controller.js';
router.post('/signup', userController.create);
router.post('/login', userController.createJWTSession);

// module.exports = router;
export default router;