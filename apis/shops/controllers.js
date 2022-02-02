// let products = require("../../data")
const Shop = require("../../db/models/Shop")

exports.fetchShop = async (shopId, next) => {
    try {
        const shop = await Shop.findById(shopId);
        return shop;
    } catch (error) {
        next(error);
        
    }
};

exports.getShops = async (req, res, next) => {
    try {
    const shops = await Shop.find().populate("products", "name price");
    res.json({ shops });
    } catch (error) {
    next(error);
    }
};


exports.postShops = async (req, res, next) => {
    try {
    const newShop = await Shop.create(req.body)
    res.status(201).json(newShop); 
    } catch (error) {
    next(error);
    }
};

exports.deleteShops = async (req, res, next) => {
    try {
    await Shop.findByIdAndDelete({ _id: req.shop._id });
    res.status(204).end()
    }
    catch (error) {
    next(error);
    }
};

exports.updateShops = async (req, res,next) => {
    try{
    const shop = await Shop.findByIdAndUpdate({_id: req.shop._id}, req.body,{new: true, runValidators: true,})
    res.json(shop);
    }
    catch(error) {
    next(error);
    }
};

exports.postProducts = async (req, res, next) => {
    try {
    const {shopId} = req.params;
    req.body.shop = shopId;
    const newProduct = await Product.create(req.body)
    await Shop.findByIdAndUpdate({_id: shopId},{$push: {products: newProduct._id}} )
    res.status(201).json(newProduct); 
    } catch (error) {
    next(error);
    }
};
