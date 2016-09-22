var express = require('express');
var app = express();
var ejs = require("ejs");
var layouts = require("express-ejs-layouts");
var mongoose = require('mongoose');
var routes = require('./config/routes');

mongoose.connect("mongodb://localhost/waterVapour");
app.set("view engine", "ejs");

app.use(layouts);

app.use(routes);

app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});

module.exports = app;
