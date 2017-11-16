"use strict";

var util = require("util");
var db = require("../../db/db");

function approvals(req, res) {
  db.approvals(function(approvals) {
    res.json(approvals);
  });
}

module.exports = {
  approvals: approvals
};
