const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("VERSION 1.9");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
