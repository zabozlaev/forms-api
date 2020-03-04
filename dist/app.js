"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _error = _interopRequireDefault(require("./api/middleware/error"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)().use((_, res) => res.send('hello')).use((0, _bodyParser.json)()).use('/forms', _api.default).use(() => console.log('hello')).use(_error.default);
var _default = app;
exports.default = _default;