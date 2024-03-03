const Joi = require("joi");

// ========================== Joi schemas

const orderProductSchema = Joi.object({
  shop_id: Joi.number(),
  product_id: Joi.number(),
  quantity: Joi.number(),
  price: Joi.number(),
});

const orderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  orderProducts: Joi.array().items(orderProductSchema),
});

module.exports = { orderSchema, orderProductSchema };
