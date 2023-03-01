const express = require("express");

const app = express.Router();

app.get("/name", (req, res) => {
  res.send("Hello from users");
});

module.exports = app;
