const express = require("express");
const { rootRouter } = require("./src/routers");
var cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());


app.use(express.json());

app.use("/api/v1", rootRouter);

const PORT = process.env.DB_PORT || 1234;
app.listen(PORT, () => {
    "app run port" + PORT;
});