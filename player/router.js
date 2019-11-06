const express = require("express");
const { Router } = express;
const Player = require("./model");

const router = new Router();
router.get("/player", (request, response, next) => {
  Player.findAll()
    .then(names => response.json(names))
    .catch(err => next(err));
});

router.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(name => res.json(name))
    .catch(err => next(err));
});

router.get("/player/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId)
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
