"use strict";

var util = require("util");
var db = require("../../db/db");

function getPlans(req, res) {
  db.plans(function(plans) {
    res.json(plans);
  });
}

function selectPlan(req, res) {
  var id = req.swagger.params.uid.value;
  db.plan(id, function(plan) {
    res.json(plan);
  });
}

function savePlan(req, res) {
  res.json({ success: db.push(req.body), description: "Plan saved!" });
}

function deletePlan(req, res) {
  var id = req.swagger.params.uid.value;
  db
    .child(id)
    .remove(function(error) {
      res.status(204).send(error);
    })
    .then(function() {
      res.json({ success: 1, description: "Plan deleted!" });
    });
}

module.exports = {
  getPlans,
  selectPlan,
  savePlan,
  deletePlan
};
