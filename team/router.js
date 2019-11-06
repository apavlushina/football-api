const express = require("express");
const { Router } = express;
const Team = require("./model");

const router = new Router();
router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(names => response.json(names))
    .catch(err => next(err));
});

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(name => res.json(name))
    .catch(err => next(err));
});

module.exports = router;
