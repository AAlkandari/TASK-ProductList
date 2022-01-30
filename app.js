const express = require("express");

const app = express();

app.use(express.json());

let products = require("./data")

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
  });

app.get("/api/products", (req, res) => {
    console.log("here");
    res.json({ products });
  });

app.get(`/data/:id`), (req,res) => {
    const { id } = req.params;
    const producto = products.find((e) => e.id === id)
    res.json(producto);
};

app.post("/api/products", (req, res) => {
    const id = products.length + 1;
    const newProduct = { id: id, ...req.body};
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.delete("/api/products/:productId", (req, res) => {
    const { productId } = req.params;
    const findProduct = products.find((product) => product.id === +productId);
    if (findProduct){
    const deleteProduct = products.filter((product) => product.id !== +productId);
    products = deleteProduct;
    res.status(204).end();
    }
    else {
    res.status(404).end();
    }
    
});

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});