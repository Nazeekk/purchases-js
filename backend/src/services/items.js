class ItemsService {
  constructor(itemsRepository) {
    this.itemsRepository = itemsRepository;
  }

  async create(data) {
    return this.itemsRepository.create(data);
  }

  async update(id, data) {
    if (!Object.keys(data).length) {throw new Error('No fields to update');}
    return this.itemsRepository.update(id, data);
  }

  async delete(id) {
    return this.itemsRepository.delete(id);
  }

  async find(filters) {
    return this.itemsRepository.find(filters);
  }
}

module.exports = ItemsService;
