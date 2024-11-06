const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require("dotenv");
const wazirxRoutes = require("./routes/wazirx_routes");
config();

app.use(cors());
app.use(express.json());

app.use("/", wazirxRoutes);
app.listen(process.env.PORT, () => {
  console.log(
    `🚀 --------- server is running on ${process.env.PORT} ---------- 🚀`
  );
});
