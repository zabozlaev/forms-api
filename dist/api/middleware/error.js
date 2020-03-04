"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.status === 500 ? 'Internal server error' : err.message;
  const timestamp = Date.now();
  return res.status(status).send({
    status,
    message,
    timestamp
  }).end();
};

var _default = errorHandler;
exports.default = _default;