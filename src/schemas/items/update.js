const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string(),
  category: Joi.string(),
  unit: Joi.string(),
}).min(1);
