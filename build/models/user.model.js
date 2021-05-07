"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _sequelize = require("sequelize");

var _connect = require("../database/connect.database");

var Users = _connect.sequelize.define('users', {
  firstName: {
    type: _sequelize.DataTypes.STRING
  },
  lastName: {
    type: _sequelize.DataTypes.STRING
  },
  email: {
    type: _sequelize.DataTypes.STRING
  },
  password: {
    type: _sequelize.DataTypes.STRING
  },
  resetToken: {
    type: _sequelize.DataTypes.STRING
  },
  active: {
    type: _sequelize.DataTypes.BOOLEAN
  }
}, {
  sequelize: _connect.sequelize,
  underscored: true,
  modelName: 'Users',
  tableName: 'users'
});

exports.Users = Users;
//# sourceMappingURL=user.model.js.map