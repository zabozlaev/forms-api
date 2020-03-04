"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFormSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postFormSchema = _joi.default.object({
  email: _joi.default.string().email().required(),
  phone: _joi.default.string().regex(new RegExp('^(8+([0-9]){10})$')).length(11).required(),
  description: _joi.default.string().max(300)
});

exports.postFormSchema = postFormSchema;