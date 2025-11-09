function buildUpdateQuery(data, startIndex = 1) {
  const updates = [];
  const values = [];
  let index = startIndex;

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      updates.push(`${key} = $${index++}`);
      values.push(value);
    }
  }

  return { updates, values, nextIndex: index };
}

function buildWhereQuery(data, startIndex = 1) {
  const filters = [];
  const values = [];
  let index = startIndex;

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      filters.push(`${key} = $${index++}`);
      values.push(value);
    }
  }

  return {
    where: filters.length ? `WHERE ${filters.join(' AND ')}` : '',
    values,
  };
}

module.exports = { buildUpdateQuery, buildWhereQuery };
