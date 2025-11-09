const { purchasesSchema } = require('../schemas');
const { checkError } = require('../utils/errorHandler');

class PurchasesController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    try {
      const { value, error } = purchasesSchema.create.validate(req.body);
      checkError(error);

      const result = await this.service.create(value);
      res.json({ result, message: 'ok' });
    } catch(err) {
      res.status(400).json({ message: err.toString() });
    }
  }

  async update(req, res) {
    try {
      const { purchaseId } = req.params;
      const { value, error } = purchasesSchema.update.validate(req.body);
      checkError(error);

      const result = await this.service.update(purchaseId, value);
      res.json({ result, message: 'ok' });
    } catch(err) {
      res.status(400).json({ message: err.toString() });
    }
  }

  async delete(req, res) {
    try {
      const { purchaseId } = req.params;
      const result = await this.service.delete(purchaseId);
      res.json({ result, message: 'ok' });
    } catch(err) {
      res.status(400).json({ message: err.toString() });
    }
  }

  async find(req, res) {
    try {
      const result = await this.service.find(req.query);
      res.json({ result, message: 'ok' });
    } catch(err) {
      res.status(400).json({ message: err.toString() });
    }
  }
}

module.exports = PurchasesController;
