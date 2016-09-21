// EDIT
function showHome(req, res) {
  res.render("generic/home", {title: "Homepage"});
}

module.exports = {
  home: showHome
};
