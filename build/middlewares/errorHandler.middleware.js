"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = void 0;

var errorHandler = function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    statusCode: 500,
    path: req.url,
    message: 'Something broke!'
  });
};

exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map