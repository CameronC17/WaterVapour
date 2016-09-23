var Users = require('../models/mongoose').Users;

// EDIT
function showHome(req, res) {
  res.render("generic/home", {title: "Homepage"});
}

function showLogin(req, res) {
  res.render("generic/login", {title: "Login"});
}

function checkLogin(req, res) {
  Users.findOne({name: req.body.username}, function(err, user) {
    if (user && user.password == req.body.password) {
        req.session.user = user.id;
        res.redirect("/");
    } else {
      if (err) {
        console.log(err.message);
      } else {
        console.log("There's no user with those credentials");
      }
      res.redirect("/login");
    }
  });
}

module.exports = {
  home: showHome,
  login: showLogin,
  checkLogin: checkLogin
};
