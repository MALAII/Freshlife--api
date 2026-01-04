const express = require("express");
const router = express.Router();
const authMiddleware = require("../middileware/authMiddleware");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Protected routes
router.post("/", authMiddleware(), createProduct);
router.get("/", authMiddleware(), getProducts);
router.put("/:id", authMiddleware(), updateProduct);
router.delete("/:id", authMiddleware(), deleteProduct);

module.exports = router;
