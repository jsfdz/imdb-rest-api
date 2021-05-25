import { Router } from 'express'
import { getAllUsers, getUser, createUser, updateUser, deleteUser, login } from '../controllers/users.controllers'
import { handlerExceptionRoute } from '../errors/handler.error'

const router = Router()

router
  .get('/', getAllUsers)
  .get('/:id', getUser)
  .post('/', handlerExceptionRoute(createUser))
  .put('/:id', updateUser)
  .delete('/:id', deleteUser)
  .post('/signin/login', login)

export default router
