"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/categoryController"),
  addCategory = _require.addCategory,
  getCategories = _require.getCategories,
  updateCategory = _require.updateCategory,
  deleteCategory = _require.deleteCategory;
router.post("/", addCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory);
router["delete"]("/:id", deleteCategory);
module.exports = router;