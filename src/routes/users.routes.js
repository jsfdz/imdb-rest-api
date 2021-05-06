import { Router } from 'express'
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.controllers'

const router = Router()

router
  .get('/', getAllUsers)
  .get('/:id', getUser)
  .post('/', createUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser)

export default router
