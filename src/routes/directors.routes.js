import { Router } from 'express'
import { getAllDirectors, getDirector, createDirector, updateDirector, deleteDirector } from '../controllers/directors.controllers'

const router = Router()

router
  .get('/', getAllDirectors)
  .get('/:id', getDirector)
  .post('/', createDirector)
  .put('/:id', updateDirector)
  .delete('/:id', deleteDirector)

export default router
