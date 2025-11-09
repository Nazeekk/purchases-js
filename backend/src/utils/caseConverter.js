function toCamelCase(row) {
  if (Array.isArray(row)) {return row.map(toCamelCase);}
  if (row && typeof row === 'object') {
    const newObj = {};
    for (const key in row) {
      const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
      newObj[camelKey] = row[key];
    }
    return newObj;
  }
  return row;
}

module.exports = { toCamelCase };
