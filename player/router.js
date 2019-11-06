const express = require("express");
const { Router } = express;
const Player = require("./model");
const Team = require("../team/model");

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
  Player.findByPk(req.params.playerId, { include: [Team] })
    .then(name => {
      if (!name) {
        res.status(404).end();
      } else {
        res.json(name);
      }
    })
    .catch(next);
});

router.put("/player/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId)
    .then(name => {
      if (name) {
        name.update(req.body).then(name => res.json(name));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
