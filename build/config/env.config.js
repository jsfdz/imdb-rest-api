"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.NAME_DB = exports.PASS_DB = exports.USER_DB = exports.HOST_DB = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var ENV = process.env;
var HOST_DB = ENV.BD_HOST;
exports.HOST_DB = HOST_DB;
var USER_DB = ENV.DB_USER;
exports.USER_DB = USER_DB;
var PASS_DB = ENV.DB_PASSWORD;
exports.PASS_DB = PASS_DB;
var NAME_DB = ENV.DB_NAME;
exports.NAME_DB = NAME_DB;
var PORT = ENV.PORT || 3001;
exports.PORT = PORT;
//# sourceMappingURL=env.config.js.map