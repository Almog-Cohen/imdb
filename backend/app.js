const express = require("express");
const cors = require("cors");
const api = require("./routes/api");

const app = express();

app.use(cors());

app.use(express.json());

// Strucutre to support more api versions
app.use("/v1", api);

module.exports = app;
