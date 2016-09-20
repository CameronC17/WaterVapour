var users = [
{
  id: 0,
  name: "CaptainCam",
  creationDate: new Date(),
  ownedGames: [1],
  image: "http://weknowyourdreams.com/image.php?pic=/images/cowboy/cowboy-04.jpg"
},
{
  id: 1,
  name: "Nathn123",
  creationDate: new Date(),
  ownedGames: [2, 3],
  image: "http://weknowyourdreams.com/image.php?pic=/images/car/car-04.png"
},
{
  id: 2,
  name: "o_r_l_y",
  creationDate: new Date(),
  ownedGames: [3],
  image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Rodney_boat.jpg"
}];


// INDEX
function indexUser(req, res) {
  res.render("users/index", {title: "Users", users: users});
}

// SHOW
function showUser(req, res) {
  //res.send("SHOW:" + req.params.id);
  var user = users[req.params.id - 1];
  res.render("users/show", {title: "Game", user: user});
}

// CREATE
function createUser(req, res) {
  //get body data (use body parser)
  //posts.push({id : posts.length, title : req.body.title, body : req.body.body})
  //res.render("posts/show", {title: "User", user: user});
  res.send("CREATE");
}

// NEW
function newUser(req, res) {
  res.render("users/new", {title: "Create new"});
}

// UPDATE
function updateUser(req, res) {
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deleteUser(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editUser(req, res) {
  var user = users[req.params.id];
  res.render("users/edit", {title: "Edit", game: game});
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
