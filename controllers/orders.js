const { HttpError, ctrlWrapper } = require("../helpers");
const sequelize = require("../db/config");

const Product = require("../db/models/product");
const Order = require("../db/models/order");
const OrderProduct = require("../db/models/orderProduct");
const { refreshSumOrder } = require("../db/services/orders");

// ============================== Get All

const getAllOrders = async (req, res) => {
  const order = await Order.findAll({
    include: {
      model: OrderProduct,
      as: "orderProducts", // використовуйте те саме ім'я, яке ви вказали у зв'язку
    },
  });

  if (!order) {
    throw HttpError(404, "Not found");
  }

  res.json(order);
};

// ============================== Get by ID

const getOrderById = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findByPk(id, {
    include: {
      model: OrderProduct,
      as: "orderProducts", // використовуйте те саме ім'я, яке ви вказали у зв'язку
    },
  });

  if (!order) {
    throw HttpError(404, "Not found");
  }

  res.json(order);
};

// ============================== Add order

const addOrder = async (req, res) => {
  const newOrder = await Order.create(req.body);

  const orderProductsPromises = req.body.orderProducts.map(
    async (productData) => {
      const newProduct = await OrderProduct.create(productData);
      await newOrder.addOrderProduct(newProduct);
      return newProduct;
    }
  );

  const orderProducts = await Promise.all(orderProductsPromises);

  res.status(201).json({ ...newOrder.toJSON(), orderProducts });
};

module.exports = {
  getAllOrders: ctrlWrapper(getAllOrders),
  getOrderById: ctrlWrapper(getOrderById),
  addOrder: ctrlWrapper(addOrder),
};
