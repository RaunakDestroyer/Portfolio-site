//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



app.get("/", function(req, res) {
  res.render("home")
});

app.get("/skills", function(req, res) {
  res.render("skills");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(port,hostname, function() {
  console.log("Server started at http://${hostname}:${port}/");
});
