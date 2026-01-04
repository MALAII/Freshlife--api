"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var express = require("express");
var cors = require("cors");
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var connectDB = require("./src/Db/connect");
require("./src/cron/expiryCron");
dotenv.config();
var app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔑 Connect DB BEFORE routes
(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return connectDB();
      case 2:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();

// Routes
var authRoute = require("./src/routes/authRoute");
var productRoute = require("./src/routes/productRoute");
var categoryRoute = require("./src/routes/categoryRoute");
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

// Server (local only – ignored by Vercel)
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("\uD83D\uDE80 Server running on port ".concat(PORT));
});