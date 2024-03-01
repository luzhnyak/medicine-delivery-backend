const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/shops");

router.get("/", ctrl.getAllShops);

router.get("/:id", ctrl.ShopById);

module.exports = router;
