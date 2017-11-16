"use strict";

var util = require("util");
var db = require("../../db/db");

function getApproval(req, res) {
  var uid = req.swagger.params.uid.value;
  db.get("approval", uid, function(approval) {
    res.json(approval);
  });
}

function allApprovals(req, res) {
  db.all("approval", function(approvals) {
    res.json(approvals);
  });
}

function saveApproval(req, res) {
  db.save("approval", req.body, function() {
    res.json({ success: 1, description: "Approval saved!" });
  });
}

function updateApproval(req, res) {
  db.update("approval", req.body, function() {
    res.json({ success: 1, description: "Approval updated!" });
  });
}

function removeApproval(req, res) {
  var uid = req.swagger.params.uid.value;
  db.remove("approval", uid, function() {
    res.json({ success: 1, description: "Approval removed!" });
  });
}

module.exports = {
  getApproval,
  allApprovals,
  saveApproval,
  updateApproval,
  removeApproval
};
