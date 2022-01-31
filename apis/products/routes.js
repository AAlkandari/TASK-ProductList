const express = require("express");

const router = express.Router();

const { getProducts, getDetails, postProducts, deleteProductss, updateProducts } = require("./controllers")

router.get("/", getProducts);

router.get(`/:id`, getDetails);

router.post("/", postProducts)

router.delete("/:productId", deleteProductss)

router.put("/:productId", updateProducts);

module.exports = router;