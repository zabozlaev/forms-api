"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateBody = void 0;

var _error = _interopRequireDefault(require("../utils/error"));

var _validate = _interopRequireDefault(require("../utils/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateBody = schema => async (req, _, next) => {
  try {
    await (0, _validate.default)(scshema, req.body);
    next();
  } catch (error) {
    next(new _error.default('Incorrect body', 422));
  }
};

exports.validateBody = validateBody;