const express = require("express");

const router = express.Router();

const { getProducts, getDetails,  deleteProductss, updateProducts, fetchProduct } = require("./controllers")

router.param("productId", async (req, res, next, productId) => {
    const product = await fetchProduct(productId, next);
    if(product) {
        req.product = product;
        next();
    }
    else {
        next({ status:404, message: "Product Not Found !"})
    }
});

router.get("/", getProducts);

router.get(`/:id`, getDetails);

router.delete("/:productId", deleteProductss)

router.put("/:productId", updateProducts);

module.exports = router;