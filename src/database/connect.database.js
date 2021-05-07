import { Sequelize } from 'sequelize'
import { HOST_DB, NAME_DB, PASS_DB, USER_DB } from '../config/env.config'

export const sequelize = new Sequelize(
  NAME_DB, USER_DB, PASS_DB,
  {
    host: HOST_DB,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }

  })

export const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
