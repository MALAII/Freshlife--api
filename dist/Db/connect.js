"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var mongoose = require("mongoose");
mongoose.set("bufferCommands", false);
var cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null
  };
}
function connectDB() {
  return _connectDB.apply(this, arguments);
}
function _connectDB() {
  _connectDB = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!cached.conn) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", cached.conn);
        case 2:
          if (!cached.promise) {
            cached.promise = mongoose.connect(process.env.MONGO_URI, {
              serverSelectionTimeoutMS: 5000
            });
          }
          _context.next = 5;
          return cached.promise;
        case 5:
          cached.conn = _context.sent;
          console.log("✅ MongoDB connected");
          return _context.abrupt("return", cached.conn);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _connectDB.apply(this, arguments);
}
module.exports = connectDB;