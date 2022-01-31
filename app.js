const express = require("express");
const productRouter = require("./apis/products/routes");
const app = express();
const connectDB = require("./db/database");

app.use(express.json());

app.use("/api/products", productRouter)


connectDB();
app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});