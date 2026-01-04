const cron = require("node-cron");
const Product = require("../module/productModel");
const { sendExpiryMail } = require("../utils/sendMail");

cron.schedule("0 9 * * *", async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiredProducts = await Product.find({
    expiryDate: { $lt: today },
    notified: false,
  });

  for (const product of expiredProducts) {
    await sendExpiryMail(product);
    product.notified = true;
    await product.save();
  }

  console.log("📧 Expired product emails sent");
});
