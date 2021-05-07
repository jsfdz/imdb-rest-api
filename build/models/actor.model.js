"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actors = void 0;

var _sequelize = require("sequelize");

var _connect = require("../database/connect.database");

var Actors = _connect.sequelize.define('actors', {
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
  modelName: 'Actors',
  tableName: 'actors'
});

exports.Actors = Actors;
//# sourceMappingURL=actor.model.js.map