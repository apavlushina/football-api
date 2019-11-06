const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("listening on port " + port));

const teamRouter = require("./team/router");

app.use(teamRouter);
