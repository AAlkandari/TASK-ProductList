let products = require("../../data")



exports.getProducts = (req, res) => {
    console.log("here");
    res.json({ products });
  };

exports.getDetails =  (req,res) => {
    const { id } = req.params;
    const producto = products.find((e) => e.id === id)
    res.json(producto);
};

exports.postProducts =  (req, res) => {
    const id = products.length + 1;
    const newProduct = { id: id, ...req.body};
    products.push(newProduct);
    res.status(201).json(newProduct);
};

exports.deleteProductss =  (req, res) => {
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
    
};