const express = require("express");
const { validateBody } = require("../../middlewares");
const { orderSchema, orderProductSchema } = require("../../shemas/order");

const router = express.Router();

const ctrl = require("../../controllers/orders");

router.get("/", ctrl.getAllOrders);

router.get("/:id", ctrl.getOrderById);

router.post("/", validateBody(orderSchema), ctrl.addOrder);

module.exports = router;
