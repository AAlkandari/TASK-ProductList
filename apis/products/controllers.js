// let products = require("../../data")
const Product = require("../../db/models/Product")



exports.fetchProduct = async (productId, next) => {
    try {
        const product = await Product.findById(productId);
        return product;
    } catch (error) {
        next(error);
        
    }
}

exports.getProducts = async (req, res, next) => {
    try {
    const products = await Product.find({},{"color": 0,"quantity": 0,"createdAt": 0,"updatedAt": 0});
    res.json({ products });
    } catch (error) {
    next(error);
    }
};

exports.getDetails = (req,res,next) => {
    try {
    res.json(req.product)
    } catch (error) {
    next(error);
    }
};



exports.deleteProductss = async (req, res, next) => {
    try {
    await Product.findByIdAndDelete({ _id: req.product._id });
    res.status(204).end()
    }
    catch (error) {
    next(error);
    }
};

exports.updateProducts = async (req, res,next) => {
    try{
    const product = await Product.findByIdAndUpdate({_id: req.product._id}, req.body,{new: true, runValidators: true,})
    res.json(product);
    }
    catch(error) {
    next(error);
    }
};

