import { Sequelize } from 'sequelize'
import { NAME_DB, PASS_DB, USER_DB } from '../config/env.config'

export const sequelize = new Sequelize(
  NAME_DB, USER_DB, PASS_DB,
  {
    host: 'localhost',
    dialect: 'postgres'
  })

export const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
