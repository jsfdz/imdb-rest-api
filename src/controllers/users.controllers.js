import { Users } from '../models/user.model'
import { hash } from 'bcrypt'

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
  const hashPassword = await hash(password, 10)
  await Users.create({ firstName, lastName, email, password: hashPassword, resetToken })
  res.status(200).json({
    satusCode: 200,
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
