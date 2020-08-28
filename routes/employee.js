const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')
// const Employee = require('../models/Employee')
const upload = require('../middleware/upload')
const autheticate = require('../middleware/autheticate')

router.get('/', autheticate, EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', upload.single('avatar'), EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router