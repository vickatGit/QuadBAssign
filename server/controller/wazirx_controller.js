const pool = require("../PgDb/pgDb");
const { insertCoinQuery, fetchCoinQuery } = require("../PgDb/pgQueries");
const { getTickers } = require("../service/wazirxServices");

const getTickersController = async (req, res) => {
  try {
    const tickers = await getTickers(res);
    res.status(200).send({
      data: tickers,
    });
  } catch (error) {
    res.status(res.statusCode | 500).send({
      errors: error.message,
    });
  }
};

// const getTickers = async (req, res, next) => {
//   let connectionPromise;
//   try {
//     connectionPromise = new Promise((resolve, reject) => {
//       pool.connect((err) => {
//         if (err) {
//           console.log("db error is " + err);
//           reject();
//           throw new Error("Internal Server Error");
//         } else {
//           resolve();
//           console.log("db connected");
//         }
//       });
//     });

//     connectionPromise.then(async () => {
//       const result = await getTickersFromDb();

//       if (result.length === 0) {
//         res.status(200).json(await getTickersFromApi());
//       } else {
//         res.status(200).json(result);
//       }
//     });
//   } catch (error) {
//     res.status(500);
//     next(error);
//   }
// };

// async function getTickersFromApi() {
//   console.log("fetching data from api ");
//   const response = await fetch("https://api.wazirx.com/api/v2/tickers");
//   const data = await response.json();

//   const coins = Object.keys(data).slice(0, 10);
//   console.log("length coins " + coins.length);

//   const insertionPromises = coins.map((coin) => {
//     const coinInfo = data[coin];
//     const values = [
//       coinInfo.name,
//       coinInfo.last,
//       coinInfo.buy,
//       coinInfo.sell,
//       coinInfo.volume,
//       coinInfo.base_unit,
//     ];

//     return new Promise((resolve, reject) => {
//       pool.query(insertCoinQuery, values, (err, result) => {
//         if (err) {
//           console.log("Error :  While Row Insertion into PG ❗");
//           resolve();
//         } else {
//           resolve();
//         }
//       });
//     });
//   });

//   await Promise.all(insertionPromises)
//     .then(() => {
//       console.log("All rows inserted successfully 🎯 ");
//       pool.end();
//     })
//     .catch((err) => {
//       console.log("Failed to insert all rows ❗ ");
//       pool.end();
//     });
// }

// async function getTickersFromDb() {
//   console.log("In Db");
//   const result = await pool.query(fetchCoinQuery);
//   return result.rows;
// }

// // async function clearTickerTable() {
// //     await pool.query('DELETE FROM tickers');
// //   }
module.exports = { getTickersController };
