const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require("./src/cron/expiryCron");

dotenv.config();

const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());  // Support base64 images

// MongoDB connection
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

 
const authRoute = require("./src/routes/authRoute");
 
const productRoute = require("./src/routes/productRoute");
const categoryRoute = require("./src/routes/categoryRoute");

app.use("/api/categories", categoryRoute);

app.use("/api/products", productRoute);

app.use("/api/auth", authRoute);
 

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
