const express = require("express");
const { Router } = express;
const Player = require("./model");

const router = new Router();
router.get("/player", (request, response, next) => {
  Player.findAll()
    .then(names => response.json(names))
    .catch(err => next(err));
});

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(name => res.json(name))
    .catch(err => next(err));
});

router.get("/team/:teamId", (req, res, next) => {
  Team.findByPk(req.params.teamId)
    .then(name => {
      if (!name) {
        res.status(404).end();
      } else {
        res.json(name);
      }
    })
    .catch(next);
});

module.exports = router;
