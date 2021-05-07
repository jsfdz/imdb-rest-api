"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("./users.routes"));

var _actors = _interopRequireDefault(require("./actors.routes"));

var _directors = _interopRequireDefault(require("./directors.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use('/users', _users["default"]);
router.use('/actors', _actors["default"]);
router.use('/directors', _directors["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map