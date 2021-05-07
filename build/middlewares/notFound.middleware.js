"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFountHandler = void 0;

var notFountHandler = function notFountHandler(req, res, next) {
  res.status(404).json({
    statusCode: 404,
    path: req.url,
    message: 'Ooops!!!, Error 404'
  });
};

exports.notFountHandler = notFountHandler;
//# sourceMappingURL=notFound.middleware.js.map