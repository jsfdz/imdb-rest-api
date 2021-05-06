import { Router } from 'express'
import actorsRoute from './actors.routes'
import directorsRoute from './directors.routes'
const router = Router()

router.use('/actors', actorsRoute)
router.use('/directors', directorsRoute)

export default router
