const express = require('express')
const {adminLogin, logout} = require('../controllers/adminController')

const router = express.Router();

router.post('/login', adminLogin)
module.exports = router;


router.post('/logout', logout)
module.exports = router;