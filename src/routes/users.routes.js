import { Router } from 'express'
import { getAllUsers, getUser, createUser, updateUser, deleteUser, login } from '../controllers/users.controllers'

const router = Router()

router
  .get('/', getAllUsers)
  .get('/:id', getUser)
  .post('/', createUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser)
  .post('/signin/login', login)

export default router
