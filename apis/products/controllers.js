// let products = require("../../data")
const Product = require("../../db/models/Product")

exports.getProducts = async (req, res) => {
    try {
    const products = await Product.find({},{"color": 0,"quantity": 0,"createdAt": 0,"updatedAt": 0});
    res.json({ products });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

exports.getDetails = (req,res) => {
    try {
    const { id } = req.params;
    const producto = products.find((e) => e.id === id)
    res.json(producto); 
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

exports.postProducts = async (req, res) => {
    try {
    const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct); 
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

exports.deleteProductss = async (req, res) => {
    try {
    const { productId } = req.params;
    const findProduct = await Product.findByIdAndDelete({ _id: productId });
    if (findProduct){
    res.status(204).end();
    }
    else {
    res.status(404).json({ message: "Product Not Found !"});
    }
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

exports.updateProducts = async (req, res) => {
    try{
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate({_id: productId}, req.body,{new: true, runValidators: true,})
    if (product) {
    res.json(product);
    }
    else {
    res.status(404).json({ message:"Product Not Found"})
    }
    }
    catch(error) {
    res.status(500).json({ message: error.message });
    }
};