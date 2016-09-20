// EDIT
function getHome(req, res) {
  res.send("HOMEPAGE");
}

module.exports = {
  index: getHome
};
