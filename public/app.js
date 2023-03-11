"use strict";

const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("hello iqair");
});
app.listen(3100, function () {
  console.log("start :host");
});