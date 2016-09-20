var posts = [
{
  id: 0,
  title: "Post 1",
  body: "This is the first post"
},
{
  id: 1,
  title: "Post 2",
  body: "This is the second post"
},
{
  id: 2,
  title: "Post 3",
  body: "This is the third post"
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
