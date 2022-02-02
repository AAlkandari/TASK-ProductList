const express = require("express");

const router = express.Router();

const { getShops, postShops, deleteShops, updateShops, fetchShops, postProducts } = require("./controllers")

router.param("shopId", async (req, res, next, shopId) => {
    const shop = await fetchShops(shopId, next);
    if(shop) {
        req.shop = shop;
        next();
    }
    else {
        next({ status:404, message: "Shop Not Found !"})
    }
});

router.get("/", getShops);

router.post("/", postShops)

router.post("/:shopsId/products", postProducts)

router.delete("/:shopId", deleteShops)

router.put("/:shopId", updateShops);

module.exports = router;