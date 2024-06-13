import express from 'express';
const router = express.Router();
console.log('router loaded');

import users from './users.js';
import company from './company.js';
router.use('/users', users);
router.use('/company', company);
// module.exports = router;
export default router;