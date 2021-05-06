import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.database'

export const Users = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.DATE
  },
  password: {
    type: DataTypes.TEXT
  },
  resetToken: {
    type: DataTypes.STRING
  },
  active: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  underscored: true,
  modelName: 'Users',
  tableName: 'users'
})
