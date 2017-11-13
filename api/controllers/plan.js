"use strict";

var util = require("util");
var db = require("../../db/db");

function plan(req, res) {
  var id = req.swagger.params.uid.value;
  db.plan(id, function(plan) {
    res.json(plan);
  });
}

module.exports = {
  plan: plan
};
