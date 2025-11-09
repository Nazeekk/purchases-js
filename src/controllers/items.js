const { itemsSchema } = require('../schemas');
const { checkError } = require('../utils/errorHandler');

class ItemsController {
  constructor(itemsService) {
    this.itemsService = itemsService;
  }

  async create(req, res) {
    try {
      const { value, error } = itemsSchema.create.validate(req.body);
      checkError(error);
      const result = await this.itemsService.create(value);
      res.json({ message: 'ok', result });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const { itemId } = req.params;
      const { value, error } = itemsSchema.update.validate(req.body);
      checkError(error);
      const result = await this.itemsService.update(itemId, value);
      res.json({ message: 'ok', result });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { itemId } = req.params;
      const result = await this.itemsService.delete(itemId);
      res.json({ message: 'ok', result });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async find(req, res) {
    try {
      const result = await this.itemsService.find(req.query);
      res.json({ message: 'ok', result });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = ItemsController;
