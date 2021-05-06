import { Directors } from '../models/director.model'

export const getAllDirectors = async (req, res) => {
  const result = await Directors.findAll({ raw: true })
  res.status(200).json({
    satusCode: 200,
    data: result,
    message: 'List of Directors'
  })
}

export const getDirector = async (req, res) => {
  const { id } = req.params
  const result = await Directors.findOne({ where: { id }, raw: true })
  res.status(200).json({
    satusCode: 200,
    data: result,
    message: 'Show Director'
  })
}

export const createDirector = async (req, res) => {
  const { firstName, lastName, dob, biography, profilePhoto } = req.body
  await Directors.create({ firstName, lastName, dob, biography, profilePhoto })
  res.status(200).json({
    satusCode: 200,
    message: 'Director Created'
  })
}

export const updateDirector = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, dob, biography, profilePhoto } = req.body
  await Directors.update({ firstName, lastName, dob, biography, profilePhoto }, { where: { id } })
  res.status(200).json({
    satusCode: 200,
    message: 'Director Updated'
  })
}

export const deleteDirector = async (req, res) => {
  const { id } = req.params
  await Directors.destroy({ where: { id } })
  res.status(200).json({
    satusCode: 200,
    message: 'Director Deleted'
  })
}
