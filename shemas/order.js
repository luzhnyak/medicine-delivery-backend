const Joi = require("joi");

// ========================== Joi schemas

const orderSchema = Joi.object({
  address: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  comment: Joi.string().required(),
});

const orderProductSchema = Joi.object({
  order_id: Joi.number(),
  product_id: Joi.number(),
  quantity: Joi.number(),
  price: Joi.number(),
});

module.exports = { orderSchema, orderProductSchema };
