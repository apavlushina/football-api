const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.INTEGER
  }
});

const Team = require("../team/model");
Player.belongsTo(Team);

module.exports = Player;
