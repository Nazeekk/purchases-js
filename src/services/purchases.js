class PurchasesService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    return this.repository.create(data);
  }

  async update(purchaseId, data) {
    return this.repository.update(purchaseId, data);
  }

  async delete(purchaseId) {
    return this.repository.delete(purchaseId);
  }

  async find(filters) {
    return this.repository.find(filters);
  }
}

module.exports = PurchasesService;
