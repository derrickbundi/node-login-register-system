const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/auth/register', AuthController.register)
router.post('/auth/login', AuthController.login)

module.exports = router