"use strict";

var util = require("util");
var db = require("../../db/db");

function refresh(req, res) {
  db.refresh(function() {
    res.json({ success: 1, description: "Database refreshed!" });
  });
}

function refreshEntity(req, res) {
  var entity = req.swagger.params.entity.value.toLowerCase();
  db.refreshEntity(entity, function() {
    res.json({ success: 1, description: entity + " data refreshed!" });
  });
}

function reset(req, res) {
  db.reset(function() {
    res.json({ success: 1, description: "Database reseted!" });
  });
}

function resetEntity(req, res) {
  var entity = req.swagger.params.entity.value.toLowerCase();
  db.resetEntity(entity, function() {
    res.json({ success: 1, description: entity + " data reseted!" });
  });
}

module.exports = {
  refresh,
  refreshEntity,
  reset,
  resetEntity
};