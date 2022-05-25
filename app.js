const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("VERSION 2");
});
app.get("/blog", function (req, res) {
  res.send("Welcome to blog");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
