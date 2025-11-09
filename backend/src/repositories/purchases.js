const { buildUpdateQuery, buildWhereQuery } = require('../db/queryHelpers');

class PurchasesRepository {
  constructor(db) {
    this.db = db;
  }

  async create({ pricePerUnit, amount, month, year, itemId }) {
    const query = `
      INSERT INTO public.purchases (price_per_unit, amount, month, year, item_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    return this.db.query(query, [pricePerUnit, amount, month, year, itemId]);
  }

  async update(purchaseId, data) {
    const { updates, values, nextIndex } = buildUpdateQuery(data);
    const query = `
      UPDATE public.purchases
      SET ${updates.join(', ')}
      WHERE purchase_id = $${nextIndex}
      RETURNING *;
    `;
    return this.db.query(query, [...values, purchaseId]);
  }

  async delete(purchaseId) {
    const query = `
      DELETE FROM public.purchases
      WHERE purchase_id = $1
      RETURNING *;
    `;
    return this.db.query(query, [purchaseId]);
  }

  async find(filters) {
    const { where, values } = buildWhereQuery(filters);
    const query = `
      SELECT * FROM public.purchases
      ${where};
    `;
    return this.db.query(query, values);
  }
}

module.exports = PurchasesRepository;
