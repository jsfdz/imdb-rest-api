"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;

var _user = require("../models/user.model");

var _bcrypt = require("bcrypt");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user.Users.findAll({
              raw: true
            });

          case 2:
            result = _context.sent;
            res.status(200).json({
              satusCode: 200,
              data: result,
              message: 'List of Users'
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllUsers = getAllUsers;

var getUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _user.Users.findOne({
              where: {
                id: id
              },
              raw: true
            });

          case 3:
            result = _context2.sent;
            res.status(200).json({
              satusCode: 200,
              data: result,
              message: 'Show User'
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, firstName, lastName, email, password, resetToken, hashPassword;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password, resetToken = _req$body.resetToken;
            _context3.next = 3;
            return (0, _bcrypt.hash)(password, 10);

          case 3:
            hashPassword = _context3.sent;
            _context3.next = 6;
            return _user.Users.create({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: hashPassword,
              resetToken: resetToken
            });

          case 6:
            res.status(200).json({
              satusCode: 200,
              message: 'User Created'
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, firstName, lastName, email, password, resetToken, hashPassword;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email, password = _req$body2.password, resetToken = _req$body2.resetToken;
            _context4.next = 4;
            return (0, _bcrypt.hash)(password, 10);

          case 4:
            hashPassword = _context4.sent;
            _context4.next = 7;
            return _user.Users.update({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: hashPassword,
              resetToken: resetToken
            }, {
              where: {
                id: id
              }
            });

          case 7:
            res.status(200).json({
              satusCode: 200,
              message: 'User Updated'
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _user.Users.destroy({
              where: {
                id: id
              }
            });

          case 3:
            res.status(200).json({
              satusCode: 200,
              message: 'User Deleted'
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map