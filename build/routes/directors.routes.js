"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _directors = require("../controllers/directors.controllers");

var router = (0, _express.Router)();
router.get('/', _directors.getAllDirectors).get('/:id', _directors.getDirector).post('/', _directors.createDirector).put('/:id', _directors.updateDirector)["delete"]('/:id', _directors.deleteDirector);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=directors.routes.js.map