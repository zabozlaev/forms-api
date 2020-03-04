"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class HttpError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
  }

}

var _default = HttpError;
exports.default = _default;