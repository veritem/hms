const express = require('express')
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users')

const router = express.Router({ mergeParams: true })

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router
