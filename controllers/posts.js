var games = [
{
  id: 0,
  title: "Spooky Skeltal game",
  tags: ["Scary", "Fun"],
  body: "This game will spooky the hell out of you",
  image: "https://i.ytimg.com/vi/eVrYbKBrI7o/maxresdefault.jpg",
  comments: []
},
{
  id: 1,
  title: "Call of Doody 23",
  tags: ["Action", "Explosions"],
  body: "Shoot people and do not feel guilty whatsoever",
  image: "http://mod.gov.rw/fileadmin/user_upload/Images_for_News/Zigama_Css_G_Assemb2.jpg",
  comments: []
},
{
  id: 2,
  title: "Pineshaft",
  tags: ["Explore", "Dig"],
  body: "You have never wanted to dig dirt for hours until now",
  image: "http://i.imgur.com/8XSrp6G.jpg",
  comments: []
}];


// INDEX
function indexPost(req, res) {
  res.render("posts/index", {title: "Posts", posts: posts});
}

// SHOW
function showPost(req, res) {
  //res.send("SHOW:" + req.params.id);
  var post = posts[req.params.id];
  res.render("posts/show", {title: "Post", post: post});
}

// CREATE
function createPost(req, res) {
  //get body data (use body parser)
  //posts.push({id : posts.length, title : req.body.title, body : req.body.body})
  //res.render("posts/show", {title: "Post", post: post});
  res.send("CREATE");
}

// NEW
function newPost(req, res) {
  res.render("posts/new", {title: "Create new"});
}

// UPDATE
function updatePost(req, res) {
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deletePost(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editPost(req, res) {
  var post = posts[req.params.id];
  res.render("posts/edit", {title: "Edit", post: post});
}

module.exports = {
  index: indexPost,
  show: showPost,
  new: newPost,
  create: createPost,
  edit: editPost,
  update: updatePost,
  delete: deletePost
};
