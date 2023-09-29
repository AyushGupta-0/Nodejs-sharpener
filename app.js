const http = require("http");
const express = require("express");
const bosyParser = require("body-parser")

const app = express();

app.use(bosyParser.urlencoded({extended:false}));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" type="submit"><button>Add Product</button></form>'
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

const server = http.createServer(app);

server.listen(3000);
