const express = require("express");
const { Router } = express;
const Team = require("./model");

const router = new Router();
router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(names => response.json(names))
    .catch(err => next(err));
});

module.exports = router;
