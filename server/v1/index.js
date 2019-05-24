import express from 'express'
import user from './user'
import activities from './activities'

const router = express.Router()

router.use('/user', user)
router.use('/activities', activities)

export default router
