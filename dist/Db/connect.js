"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var mongoose = require("mongoose");
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
              bufferCommands: false
            }).then(function (mongoose) {
              console.log("MongoDB Connected");
              return mongoose;
            });
          }
          _context.prev = 3;
          _context.next = 6;
          return cached.promise;
        case 6:
          cached.conn = _context.sent;
          _context.next = 14;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          cached.promise = null;
          console.error("MongoDB connection error:", _context.t0);
          throw _context.t0;
        case 14:
          return _context.abrupt("return", cached.conn);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 9]]);
  }));
  return _connectDB.apply(this, arguments);
}
module.exports = connectDB;