const express = require('express')
const { getCustomer, createCustomer, updateCustomer, deleteCustomer, getCustomers } = require('../controllers/customer')
    // const { route } = require('./CustomerTypes')

const router = express.Router({ mergeParams: true })

router.route('/').get(getCustomers).post(createCustomer)
router.route('/:id').get(getCustomer).put(updateCustomer).delete(deleteCustomer)

module.exports = router