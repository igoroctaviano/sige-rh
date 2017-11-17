"use strict";

var util = require("util");
var db = require("../../db/db");

function getPlan(req, res) {
  var uid = req.swagger.params.uid.value;
  db.get("plan", uid, function(plan) {
    res.json(plan);
  });
}

function allPlans(req, res) {
  db.all("plan", function(plans) {
    res.json(plans);
  });
}

function savePlan(req, res) {
  db.save("plan", req.body, function() {
    res.json({ success: 1, description: "Plan saved!" });
  });
}

function updatePlan(req, res) {
  db.update("plan", req.body, function() {
    res.json({ success: 1, description: "Plan updated!" });
  });
}

function removePlan(req, res) {
  var uid = req.swagger.params.uid.value;
  db.remove("plan", uid, function() {
    res.json({ success: 1, description: "Plan removed!" });
  });
}

function allPlanTypes(req, res) {
  db.all("plan/type", function(planTypes) {
    res.json(planTypes);
  });
}

module.exports = {
  getPlan,
  allPlans,
  savePlan,
  updatePlan,
  removePlan,
  allPlanTypes
};