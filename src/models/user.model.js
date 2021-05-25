import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.database'

export const Users = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Este campo no puede estar vacio'
      }
    }
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Intruduce un email valido'
      }
    }
  },
  password: {
    type: DataTypes.STRING
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
