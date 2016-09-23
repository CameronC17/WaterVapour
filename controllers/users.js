var Users = require('../models/mongoose').Users;

// INDEX
function indexUser(req, res) {
    Users.find({} , function(err, users) {
    // check for errors and return 500 error and message if found
    if(err) return res.status(500).send(err);
    res.render("users/main", {title: "Users", users: users});
    });
}

// SHOW
function showUser(req, res) {
  //res.send("SHOW:" + req.params.id);
  Users.findById(req.params.id , function(err, user) {
    var newUser = {
      name: user.name,
      image: user.image,
      ownedGames: user.ownedGames,
      id: user.id
  }
  res.render("users/show", {title: "User", theuser: newUser});
  });
}

// CREATE
function createUser(req, res) {
    Users.create( req.body, function(err, post){

    // check for errors and return 500 if there was a problem
    if(err) return res.status(500).send(err);

    // redirect the user to a GET route. We'll go back to the INDEX.
   res.redirect("/");

  });
}

// NEW
function newUser(req, res) {
    var newUser = {
      title: "",
      tags: [],
      image: "",
      comments: []
  }

  res.render("Users/new" , {
    title: "New User",
    User: newUser
  });
}

// UPDATE
function updateUser(req, res) {
      Users.findByIdAndUpdate(
        req.params.id,
        { $set:  req.body },
        { runValidators: true },
        function(err , post){

          if(err) return res.status(500).send(err);

          // redirect the user to a GET route. We'll go back to the INDEX.
          res.redirect("/");

        }
    );
}

// DELETE
function deleteUser(req, res) {
    Users.findByIdAndRemove(req.params.id , function(err) {
      // redirect to a GET request
      res.redirect("/");
  });
}

// EDIT
function editUser(req, res) {
      Users.findById(req.params.id , function(err, User) {
      // check for errors or for no object found
      if(!User) return res.status(404).send("Not found");
     if(err) return res.status(500).send(err);
  res.render("Users/edit", {title: "Edit", User: User});
      });
}

module.exports = {
  index: indexUser,
  show: showUser,
  new: newUser,
  create: createUser,
  edit: editUser,
  update: updateUser,
  delete: deleteUser
};

//
