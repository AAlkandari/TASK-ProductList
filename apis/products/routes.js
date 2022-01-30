const express = require("express");

const router = express.Router();

const { getProducts, getDetails, postProducts, deleteProductss} = require("./controllers")

router.get("/", getProducts);

router.get(`/:id`, getDetails);

router.post("/", postProducts)

router.delete("/:productId", deleteProductss)

module.exports = router;