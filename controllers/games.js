var games = [
{
  id: 1,
  title: "Spooky Skeltal game",
  tags: ["Scary", "Fun"],
  body: "This game will spooky the hell out of you",
  image: "https://i.ytimg.com/vi/eVrYbKBrI7o/maxresdefault.jpg",
  comments: []
},
{
  id: 2,
  title: "Call of Doody 23",
  tags: ["Action", "Explosions"],
  body: "Shoot people and do not feel guilty whatsoever",
  image: "http://mod.gov.rw/fileadmin/user_upload/Images_for_News/Zigama_Css_G_Assemb2.jpg",
  comments: []
},
{
  id: 3,
  title: "Pineshaft",
  tags: ["Explore", "Dig"],
  body: "You have never wanted to dig dirt for hours until now",
  image: "http://i.imgur.com/8XSrp6G.jpg",
  comments: []
}];


// INDEX
function indexGame(req, res) {
  res.render("games/index", {title: "Games", games: games});
}

// SHOW
function showGame(req, res) {
  //res.send("SHOW:" + req.params.id);
  var game = games[req.params.id];
  res.render("games/show", {title: "Game", game: games});
}

// CREATE
function createGame(req, res) {
  //get body data (use body parser)
  //posts.push({id : posts.length, title : req.body.title, body : req.body.body})
  //res.render("posts/show", {title: "Game", game: game});
  res.send("CREATE");
}

// NEW
function newGame(req, res) {
  res.render("games/new", {title: "Create new"});
}

// UPDATE
function updateGame(req, res) {
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deleteGame(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editGame(req, res) {
  var game = games[req.params.id];
  res.render("games/edit", {title: "Edit", game: game});
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
