const express = require("express");
const router = express.Router();
const { getTickersController } = require("../controller/wazirx_controller");

router.route("/tickers").get(getTickersController);

module.exports = router;
