"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const config = {
  port: +process.env.PORT || 4000,
  frontendUrl: process.env.FRONTEND_URL || '*',
  database: {
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
    passwrod: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  }
};
var _default = config;
exports.default = _default;