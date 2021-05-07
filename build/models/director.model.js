"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Directors = void 0;

var _sequelize = require("sequelize");

var _connect = require("../database/connect.database");

var Directors = _connect.sequelize.define('directors', {
  firstName: {
    type: _sequelize.DataTypes.STRING
  },
  lastName: {
    type: _sequelize.DataTypes.STRING
  },
  dob: {
    type: _sequelize.DataTypes.DATE
  },
  biography: {
    type: _sequelize.DataTypes.TEXT
  },
  profilePhoto: {
    type: _sequelize.DataTypes.STRING
  },
  active: {
    type: _sequelize.DataTypes.BOOLEAN
  }
}, {
  sequelize: _connect.sequelize,
  underscored: true,
  modelName: 'Directors',
  tableName: 'directors'
});

exports.Directors = Directors;
//# sourceMappingURL=director.model.js.map