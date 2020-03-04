"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(require("mysql2/promise"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pool = _promise.default.createPool({
  host: _config.default.database.host,
  user: _config.default.database.user,
  database: _config.default.database.name,
  password: _config.default.database.password
});

var _default = pool;
exports.default = _default;