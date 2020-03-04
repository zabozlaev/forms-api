"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validate = (val, schema) => new Promise((resolve, reject) => _joi.default.validate(val, schema, {}, err => err ? reject(err) : resolve()));

var _default = validate;
exports.default = _default;