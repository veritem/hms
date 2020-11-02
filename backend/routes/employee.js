const express = require('express')
const { getEmployee, createEmployee, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee')
const { route } = require('./EmployeeTypes')

const router = express.Router({ mergeParams: true })

router.route('/').get(getEmployee).post(createEmployee)
router.route('/:id').get(getEmployee).update(updateEmployee).delete(deleteEmployee)

module.exports = router