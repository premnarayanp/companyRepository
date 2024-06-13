// const express = require('express');
import express from 'express';
const router = express.Router();
console.log('router loaded');

import users from './users.js';
router.use('/users', users);

// module.exports = router;
export default router;