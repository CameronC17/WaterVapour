var express = require('express');
var app = express();
var ejs = require("ejs");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var layouts = require("express-ejs-layouts");
var mongoose = require('mongoose');
var session = require('express-session');


var User = require('./models/mongoose').Users;
var routes = require('./config/routes');

mongoose.connect("mongodb://localhost/waterVapour");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

//session
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: "iwanttobeinamerica"
}));

// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

//load current user
app.use(function (req, res, next) {
  if (!req.session.user) {
    res.locals.user = false;
    next();
  } else {
    User.findById(req.session.user, function(err, user) {
      if (user) {
        req.user = user;
        res.locals.user = user;
      } else {
        req.sessions.user = null;
      }
      next(err);
    });
  }
});

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(layouts);

app.use(routes);

app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});

module.exports = app;
