
const http = require("http");
const express = require("express");
const bosyParser = require("body-parser");


const app = express();

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

app.use(bosyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req , res,next)=>{
  res.status(404).send('<h1>Page not found</h1>');
})

const server = http.createServer(app);

server.listen(3000);
