var express = require("express");

var router = express.Router();

var genericController = require('../controllers/generic');
var gamesController = require('../controllers/games');
var usersController = require('../controllers/users');
// add routes here

//home route
router.route("/")
  .get(genericController.index);

//games routes
router.route("/games/")
  .get(gamesController.index)
  .post(gamesController.create);

router.route("/games/new")
  .get(gamesController.new);

router.route("/games/:id/edit")
  .get(gamesController.edit);

router.route("/games/:id")
  .get(gamesController.show)
  .put(gamesController.update)
  .delete(gamesController.delete);

//users routes
router.route("/users/")
  .get(usersController.index)
  .post(usersController.create);

router.route("/users/new")
  .get(usersController.new);

router.route("/users/:id/edit")
  .get(usersController.edit);

router.route("/users/:id")
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);


module.exports = router;
