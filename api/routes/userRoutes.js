const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// Route สำหรับเพิ่มผู้ใช้ใหม่
router.post('/create', createUser);

module.exports = router;
