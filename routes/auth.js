import express from 'express'
import { register, login, getMe } from '../controllers/auth'
import { protect } from '../middleware/auth'
import { route } from './users'
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
module.exports = router
