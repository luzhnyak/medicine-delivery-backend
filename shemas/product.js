const Joi = require("joi");

// ========================== Joi schemas

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  image: Joi.string(),
});

module.exports = { productSchema };
