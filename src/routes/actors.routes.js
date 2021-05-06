import { Router } from 'express'
import { getAllActors, getActor, createActor, updateActor, deleteActor } from '../controllers/actors.controllers'

const router = Router()

router
  .get('/', getAllActors)
  .get('/:id', getActor)
  .post('/', createActor)
  .put('/:id', updateActor)
  .delete('/:id', deleteActor)

export default router
