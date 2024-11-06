const pool = require("../PgDb/pgDb");
const { insertCoinQuery, fetchCoinQuery } = require("../PgDb/pgQueries");
const axios = require("axios");

const getTickers = async (res) => {
  let dbConnection;
  try {
    dbConnection = await connectToDb();
    const cacheTickers = await getTickersFromDB();

    if (cacheTickers.length === 0) return await getTickersFromApi();
    else return cacheTickers;
  } catch (error) {
    res.status(500);
    throw error;
  } finally {
    // closeDb();
  }
};

const getTickersFromApi = async () => {
  const { data } = await axios.get("https://api.wazirx.com/api/v2/tickers");
  const coins = Object.keys(data).slice(0, 10);

  const insertionPromises = coins.map((coin) => {
    const coinInfo = data[coin];
    const values = Object.values(coinInfo);

    return new Promise((resolve) => {
      pool.query(insertCoinQuery, values, (err) => {
        if (err) console.error("Error while inserting row into PG:", err);
        resolve();
      });
    });
  });
  await Promise.all(insertionPromises);
};

const getTickersFromDB = async () => {
  const result = await pool.query(fetchCoinQuery);
  return result.rows;
};

const connectToDb = () => {
  return new Promise((resolve, reject) => {
    pool.connect((err) => {
      if (err) {
        console.error("Database connection error:", err);
        reject(err);
      } else {
        console.log("Database connected");
        resolve();
      }
    });
  });
};

const closeDb = () => pool.end();
const releaseDb = (client) => client.release();

module.exports = { getTickers, closeDb, releaseDb };
