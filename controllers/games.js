var Games = require('../models/mongoose').Games;

// INDEX
function indexGame(req, res) {
    Games.find({} , function(err, games) {
    // check for errors and return 500 error and message if found
    if(err) return res.status(500).send(err);
    res.render("games/main", {title: "Games", games: games});
    });
}

// SHOW
function showGame(req, res) {
  //res.send("SHOW:" + req.params.id);
  Games.findById(req.params.id , function(err, game) {
  res.render("games/show", {title: "Game", game: game});
  });
}

// CREATE
function createGame(req, res) {
  //get body data (use body parser)
  //posts.push({id : posts.length, title : req.body.title, body : req.body.body})
  //res.render("posts/show", {title: "Game", game: game});
    Games.create( req.body , function(err, post){

    // check for errors and return 500 if there was a problem
    if(err) return res.status(500).send(err);

    // redirect the user to a GET route. We'll go back to the INDEX.
   res.redirect("/");

  });
}

// NEW
function newGame(req, res) {
    var newGame = {
      title: "",
      tags: [],
      body: "",
      image: "",
      comments: []
  }

  res.render("games/new" , {
    title: "New Game",
    game: newGame
  });
}

// UPDATE
function updateGame(req, res) {
      Games.findByIdAndUpdate(
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
function deleteGame(req, res) {
    Games.findByIdAndRemove(req.params.id , function(err) {
      // redirect to a GET request
      res.redirect("/");
  });
}

// EDIT
function editGame(req, res) {
      Games.findById(req.params.id , function(err, game) {

      // check for errors or for no object found
      if(!game) return res.status(404).send("Not found");
     if(err) return res.status(500).send(err);
  res.render("games/edit", {title: "Edit", game: game});
      });
}

module.exports = {
  index: indexGame,
  show: showGame,
  new: newGame,
  create: createGame,
  edit: editGame,
  update: updateGame,
  delete: deleteGame
};
