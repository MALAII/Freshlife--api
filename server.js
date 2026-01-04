const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./src/Db/connect");

require("./src/cron/expiryCron");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 🔑 Connect DB BEFORE routes
(async () => {
  await connectDB();
})();

// Routes
const authRoute = require("./src/routes/authRoute");
const productRoute = require("./src/routes/productRoute");
const categoryRoute = require("./src/routes/categoryRoute");

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

// Server (local only – ignored by Vercel)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 
