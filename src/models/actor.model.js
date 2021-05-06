import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.database'

export const Actors = sequelize.define('actors', {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  dob: {
    type: DataTypes.DATE
  },
  biography: {
    type: DataTypes.TEXT
  },
  profilePhoto: {
    type: DataTypes.STRING
  },
  active: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  underscored: true,
  modelName: 'Actors',
  tableName: 'actors'
})
