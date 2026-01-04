const Category = require("../module/categoryModel");

/* ➕ Add Category */
exports.addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();

    res.json({ success: true, message: "Category added" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Category exists" });
  }
};

/* 📄 Get Categories */
exports.getCategories = async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });
  res.json({ success: true, data: categories });
};

/* ✏️ Edit Category */
exports.updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    res.json({
      success: true,
      message: "Category updated",
      data: updated,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Update failed",
    });
  }
};

/* ❌ Delete Category */
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Category deleted",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Delete failed",
    });
  }
};
