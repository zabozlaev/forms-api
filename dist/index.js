"use strict";

require("dotenv/config");

var _http = require("http");

var _app = _interopRequireDefault(require("./app"));

var _config2 = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _http.createServer)(_app.default).listen(_config2.default.port, () => {
  console.log('starting');
});