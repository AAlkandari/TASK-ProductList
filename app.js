const express = require("express");

const app = express();

const products = require("./data")

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
  });

app.get("/api/products", (req, res) => {
    res.json({ products });
  });

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });