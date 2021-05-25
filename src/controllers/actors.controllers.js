import { Actors } from '../models/actor.model'

export const getAllActors = async (req, res) => {
  const result = await Actors.findAll({ raw: true })
  res.status(200).json({
    satusCode: 200,
    data: result,
    message: 'List of Actors'
  })
}

export const getActor = async (req, res) => {
  const { id } = req.params
  const result = await Actors.findOne({ where: { id }, raw: true })
  res.status(200).json({
    satusCode: 200,
    data: result,
    message: 'Show Actor'
  })
}

export const createActor = async (req, res) => {
  const { firstName, lastName, dob, biography } = req.body
  await Actors.create({ firstName, lastName, dob, biography, profilePhoto: req.file.path })
  res.status(200).json({
    satusCode: 200,
    message: 'Actor Created'
  })
}

export const updateActor = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, dob, biography } = req.body
  await Actors.update({ firstName, lastName, dob, biography, profilePhoto: req.file.path }, { where: { id } })
  res.status(200).json({
    satusCode: 200,
    message: 'Actor Updated'
  })
}

export const deleteActor = async (req, res) => {
  const { id } = req.params
  await Actors.destroy({ where: { id } })
  res.status(200).json({
    satusCode: 200,
    message: 'Actor Deleted'
  })
}
