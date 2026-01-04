"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});
exports.sendExpiryMail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(product) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            // ✅ send to yourself
            subject: "⚠️ Product Expired Alert",
            html: "\n      <h3>Expired Product Alert</h3>\n      <p><b>Product:</b> ".concat(product.name, "</p>\n      <p><b>Category:</b> ").concat(product.category, "</p>\n      <p><b>Expiry Date:</b> ").concat(new Date(product.expiryDate).toDateString(), "</p>\n    ")
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();