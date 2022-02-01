// let products = require("../../data")
const Product = require("../../db/models/Product")

exports.getProducts = async (req, res,next) => {
    try {
    const products = await Product.find({},{"color": 0,"quantity": 0,"createdAt": 0,"updatedAt": 0});
    res.json({ products });
    } catch (error) {
    next(error);
    }
};

exports.getDetails = (req,res,next) => {
    try {
    const { id } = req.params;
    const producto = products.find((e) => e.id === id)
    res.json(producto); 
    } catch (error) {
    next(error);
    }
};

exports.postProducts = async (req, res, next) => {
    try {
    const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct); 
    } catch (error) {
    next(error);
    }
};

exports.deleteProductss = async (req, res, next) => {
    try {
    const { productId } = req.params;
    const findProduct = await Product.findByIdAndDelete({ _id: productId });
    if (findProduct){
    res.status(204).end();
    }
    else {
    next({status:404, message: "Product not found" })
    }
    } catch (error) {
    next(error);
    }
};

exports.updateProducts = async (req, res,next) => {
    try{
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate({_id: productId}, req.body,{new: true, runValidators: true,})
    if (product) {
    res.json(product);
    }
    else {
    next({status:404, message: "Product not found" })
    }
    }
    catch(error) {
    next(error);
    }
};