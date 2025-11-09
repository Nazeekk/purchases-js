const Joi = require('joi');

module.exports = Joi.object({
  pricePerUnit: Joi.number(),
  amount: Joi.number(),
  month: Joi.string(),
  year: Joi.string(),
  itemId: Joi.number().integer(),
}).min(1);
