"use strict";

var util = require("util");
var db = require("../../db/db");

function plans(req, res) {
  db.plans(function(plans) {
    res.json(plans);
  });
}

module.exports = {
  plans: plans
};
