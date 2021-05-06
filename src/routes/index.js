import { Router } from 'express'
import usersRoute from './users.routes'
import actorsRoute from './actors.routes'
import directorsRoute from './directors.routes'
const router = Router()

router.use('/users', usersRoute)
router.use('/actors', actorsRoute)
router.use('/directors', directorsRoute)

export default router
