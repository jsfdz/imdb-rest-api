"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _fs = _interopRequireDefault(require("fs"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _routes = _interopRequireDefault(require("./routes"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

var _errorHandler = require("./middlewares/errorHandler.middleware");

var _notFound = require("./middlewares/notFound.middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use((0, _morgan["default"])('combined', {
  stream: _fs["default"].createWriteStream('./logs/errors.log', {
    flags: 'a'
  })
}));
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  return res.json({
    'imdb-rest-api': '1.0.0'
  });
});
app.use('/api/v1', _routes["default"]);
app.use(_errorHandler.errorHandler);
app.use(_notFound.notFountHandler);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=server.js.map