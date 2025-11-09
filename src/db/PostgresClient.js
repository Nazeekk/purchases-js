const { Pool } = require('pg');
const { toCamelCase } = require('../utils/caseConverter');

class PostgresClient {
  constructor(config) {
    this.pool = new Pool(config);
  }

  async query(sql, params = []) {
    const result = await this.pool.query(sql, params);
    return result.rows.map(toCamelCase);
  }

  async one(sql, params = []) {
    const rows = await this.query(sql, params);
    return rows[0] || null;
  }

  async close() {
    await this.pool.end();
  }
}

module.exports = PostgresClient;
