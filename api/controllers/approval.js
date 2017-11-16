"use strict";

var util = require("util");
var db = require("../../db/db");

function getApprovals(req, res) {
  db.approvals(function(approvals) {
    res.json(approvals);
  });
}

function selectApproval(req, res) {
  var id = req.swagger.params.uid.value;
  db.approval(id, function(approval) {
    res.json(approval);
  });
}

function saveApproval(req, res) {
  db.saveApproval(req.body, function() {
    res.json({ success: 1, description: "Approval saved!" });
  });
}

function deleteApproval(req, res) {
  var id = req.swagger.params.uid.value;
  db.deleteApproval(id, function() {
    res.json({ success: 1, description: "Approval deleted!" });
  });
}

module.exports = {
  getApprovals,
  selectApproval,
  saveApproval,
  deleteApproval
};
