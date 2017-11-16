"use strict";

var util = require("util");
var db = require("../../db/db");

function approval(req, res) {
  var id = req.swagger.params.uid.value;
  db.approval(id, function(approval) {
    res.json(approval);
  });
}

module.exports = {
  approval: approval
};
