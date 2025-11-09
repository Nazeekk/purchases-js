const Joi = require('joi');

module.exports = Joi.object({
  pricePerUnit: Joi.number().required(),
  amount: Joi.number().required(),
  month: Joi.string().required(),
  year: Joi.string().required(),
  itemId: Joi.number().integer().required(),
});
