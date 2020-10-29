const express = require('express')
const { getUserType, createUserType, getUserTypes, updateUserType, deleteUserType } = require('../controllers/userTypes')

const router = express.Router({mergeParams:true})

router.route('/').get(getUserTypes).post(createUserType)
router.route('/:id').get(getUserType).update(updateUserType).delete(deleteUserType)

module.exports = router
