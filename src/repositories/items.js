class ItemsRepository {
  constructor(db) {
    this.db = db;
  }

  async create({ name, category, unit }) {
    return await this.db.one(
      `INSERT INTO public.items (name, category, unit)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, category, unit]
    );
  }

  async update(id, updates) {
    const fields = [];
    const values = [];
    let index = 1;

    for (const key in updates) {
      fields.push(`${key} = $${index++}`);
      values.push(updates[key]);
    }

    values.push(id);

    return await this.db.one(
      `UPDATE public.items SET ${fields.join(
        ', '
      )} WHERE item_id = $${index} RETURNING *`,
      values
    );
  }

  async delete(id) {
    return await this.db.one(
      `DELETE FROM public.items WHERE item_id = $1 RETURNING *`,
      [id]
    );
  }

  async find(filters = {}) {
    const where = [];
    const values = [];
    let index = 1;

    for (const key in filters) {
      where.push(`${key} ILIKE $${index++}`);
      values.push(`%${filters[key]}%`);
    }

    const sql = `
      SELECT * FROM public.items
      ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
    `;
    return await this.db.query(sql, values);
  }
}

module.exports = ItemsRepository;
