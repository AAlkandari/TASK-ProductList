const express = require("express");
const res = require("express/lib/response");
const productRouter = require("./apis/products/routes");
const shopRouter = require("./apis/shops/routes");
const app = express();
const connectDB = require("./db/database");
const { logger, pathNotFound, errorHandler } = require("./Middlewares/middlewares");

app.use(express.json());

app.use(logger);

app.use("/api/products", productRouter);

app.use("/api/shops", shopRouter);

app.use(pathNotFound);

app.use(errorHandler);

connectDB();
app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});