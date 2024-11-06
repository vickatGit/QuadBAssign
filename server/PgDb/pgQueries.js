const insertCoinQuery = `INSERT INTO tickers (name, last, buy, sell, volume, base_unit) 
VALUES ($1, $2, $3, $4, $5, $6)`;

const fetchCoinQuery = `SELECT name, last, buy, sell, volume, base_unit FROM tickers
LIMIT 10`;
module.exports = {
  insertCoinQuery,
  fetchCoinQuery
};
