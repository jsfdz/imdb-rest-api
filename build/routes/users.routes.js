"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users.controllers");

var router = (0, _express.Router)();
router.get('/', _users.getAllUsers).get('/:id', _users.getUser).post('/', _users.createUser).put('/:id', _users.updateUser)["delete"]('/:id', _users.deleteUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=users.routes.js.map