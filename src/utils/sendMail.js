const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.sendExpiryMail = async (product) => {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER, // ✅ send to yourself
    subject: "⚠️ Product Expired Alert",
    html: `
      <h3>Expired Product Alert</h3>
      <p><b>Product:</b> ${product.name}</p>
      <p><b>Category:</b> ${product.category}</p>
      <p><b>Expiry Date:</b> ${new Date(
        product.expiryDate
      ).toDateString()}</p>
    `,
  });
};
