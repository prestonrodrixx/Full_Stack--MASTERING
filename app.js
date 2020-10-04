const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Hello Preston");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send("<h1>Product Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(3000);
