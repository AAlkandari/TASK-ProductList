const express = require("express");
const res = require("express/lib/response");
const productRouter = require("./apis/products/routes");
const app = express();
const connectDB = require("./db/database");

app.use(express.json());

app.use((req, res, next) => {
console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
next()
});

app.use("/api/products", productRouter)

app.use((req, res) => {
res.status(404).json({message: "Path Not Found"})
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

connectDB();
app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});