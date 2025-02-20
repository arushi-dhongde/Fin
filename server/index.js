import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRouters from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";




// configuration

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false }));
app.use(cors());

// router
app.use("/kpi", kpiRouters);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

// mongoose

const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

    // await mongoose.connection.db.dropDatabase();
    // await KPI.insertMany(kpis);
   // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));


