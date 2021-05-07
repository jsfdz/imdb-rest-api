"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _actors = require("../controllers/actors.controllers");

var router = (0, _express.Router)();
router.get('/', _actors.getAllActors).get('/:id', _actors.getActor).post('/', _actors.createActor).put('/:id', _actors.updateActor)["delete"]('/:id', _actors.deleteActor);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=actors.routes.js.map