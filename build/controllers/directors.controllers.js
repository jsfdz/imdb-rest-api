"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDirector = exports.updateDirector = exports.createDirector = exports.getDirector = exports.getAllDirectors = void 0;

var _director = require("../models/director.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllDirectors = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _director.Directors.findAll({
              raw: true
            });

          case 2:
            result = _context.sent;
            res.status(200).json({
              satusCode: 200,
              data: result,
              message: 'List of Directors'
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllDirectors(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllDirectors = getAllDirectors;

var getDirector = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _director.Directors.findOne({
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
              message: 'Show Director'
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDirector(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDirector = getDirector;

var createDirector = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, firstName, lastName, dob, biography, profilePhoto;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, dob = _req$body.dob, biography = _req$body.biography, profilePhoto = _req$body.profilePhoto;
            _context3.next = 3;
            return _director.Directors.create({
              firstName: firstName,
              lastName: lastName,
              dob: dob,
              biography: biography,
              profilePhoto: profilePhoto
            });

          case 3:
            res.status(200).json({
              satusCode: 200,
              message: 'Director Created'
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createDirector(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createDirector = createDirector;

var updateDirector = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, firstName, lastName, dob, biography, profilePhoto;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, dob = _req$body2.dob, biography = _req$body2.biography, profilePhoto = _req$body2.profilePhoto;
            _context4.next = 4;
            return _director.Directors.update({
              firstName: firstName,
              lastName: lastName,
              dob: dob,
              biography: biography,
              profilePhoto: profilePhoto
            }, {
              where: {
                id: id
              }
            });

          case 4:
            res.status(200).json({
              satusCode: 200,
              message: 'Director Updated'
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateDirector(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateDirector = updateDirector;

var deleteDirector = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _director.Directors.destroy({
              where: {
                id: id
              }
            });

          case 3:
            res.status(200).json({
              satusCode: 200,
              message: 'Director Deleted'
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDirector(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDirector = deleteDirector;
//# sourceMappingURL=directors.controllers.js.map