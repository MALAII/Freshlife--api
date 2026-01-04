"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var cron = require("node-cron");
var Product = require("../module/productModel");
var _require = require("../utils/sendMail"),
  sendExpiryMail = _require.sendExpiryMail;
cron.schedule("0 9 * * *", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var today, expiredProducts, _iterator, _step, product;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        today = new Date();
        today.setHours(0, 0, 0, 0);
        _context.next = 4;
        return Product.find({
          expiryDate: {
            $lt: today
          },
          notified: false
        });
      case 4:
        expiredProducts = _context.sent;
        _iterator = _createForOfIteratorHelper(expiredProducts);
        _context.prev = 6;
        _iterator.s();
      case 8:
        if ((_step = _iterator.n()).done) {
          _context.next = 17;
          break;
        }
        product = _step.value;
        _context.next = 12;
        return sendExpiryMail(product);
      case 12:
        product.notified = true;
        _context.next = 15;
        return product.save();
      case 15:
        _context.next = 8;
        break;
      case 17:
        _context.next = 22;
        break;
      case 19:
        _context.prev = 19;
        _context.t0 = _context["catch"](6);
        _iterator.e(_context.t0);
      case 22:
        _context.prev = 22;
        _iterator.f();
        return _context.finish(22);
      case 25:
        console.log("📧 Expired product emails sent");
      case 26:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[6, 19, 22, 25]]);
})));