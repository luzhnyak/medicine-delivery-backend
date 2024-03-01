const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/products");

router.get("/", ctrl.getAllShopProducts);

router.get("/:id", ctrl.getProductById);

module.exports = router;
