import { hash, compare } from 'bcrypt'
import { Users } from '../models/user.model'
import { generateToken } from '../auth/jwt.auth'
import { ErrorHandler } from '../errors/handler.error'

export const getAllUsers = async (req, res) => {
  const result = await Users.findAll({ raw: true })
  res.status(200).json({
    satusCode: 200,
    data: result,
    message: 'List of Users'
  })
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const result = await Users.findOne({ where: { id }, raw: true })
  res.status(200).json({
    satusCode: 200,
    data: result,
    message: 'Show User'
  })
}

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, resetToken } = req.body
  const userExist = await Users.findOne({ where: { email } })
  if (userExist) throw new ErrorHandler(400, 'User already exist')
  const hashPassword = await hash(password, 10)
  await Users.create({ firstName, lastName, email, password: hashPassword, resetToken })
  res.status(200).json({
    satusCode: 200,
    access: true,
    message: 'User Created'
  })
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email, password, resetToken } = req.body
  const hashPassword = await hash(password, 10)
  await Users.update({ firstName, lastName, email, password: hashPassword, resetToken }, { where: { id } })
  res.status(200).json({
    satusCode: 200,
    message: 'User Updated'
  })
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  await Users.destroy({ where: { id } })
  res.status(200).json({
    satusCode: 200,
    message: 'User Deleted'
  })
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await Users.findOne({ where: { email }, raw: true })
  if (!user) throw new ErrorHandler(404, 'Invalid Credentials')
  const passwordCorrect = await compare(password, user.password)
  if (!passwordCorrect) throw new ErrorHandler(400, 'Invalid Credentials')
  const token = generateToken({ user: { id: user.id } })
  res.status(200).json({
    statusCode: 200,
    access: true,
    token,
    message: 'Bienvenido'
  })
}
