var express = require("express");

var router = express.Router();

var gamesController = require('../controllers/games');

// add routes here

//jacob

router.route("/")
  .get(gamesController.index)
  .post(gamesController.create);

router.route("/new")
  .get(gamesController.new);

router.route("/:id/edit")
  .get(gamesController.edit);

router.route("/:id")
  .get(gamesController.show)
  .put(gamesController.update)
  .delete(gamesController.delete);

module.exports = router;
