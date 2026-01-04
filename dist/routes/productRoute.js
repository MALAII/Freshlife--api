"use strict";

var express = require("express");
var router = express.Router();
var authMiddleware = require("../middileware/authMiddleware");
var _require = require("../controllers/productController"),
  createProduct = _require.createProduct,
  getProducts = _require.getProducts,
  updateProduct = _require.updateProduct,
  deleteProduct = _require.deleteProduct;

// Protected routes
router.post("/", authMiddleware(), createProduct);
router.get("/", authMiddleware(), getProducts);
router.put("/:id", authMiddleware(), updateProduct);
router["delete"]("/:id", authMiddleware(), deleteProduct);
module.exports = router;