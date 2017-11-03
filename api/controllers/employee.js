"use strict";

var util = require("util");
var db = require("../../db/db");

function employee(req, res) {
  var id = req.swagger.params.id.value;
  db.employee(id, function(employee) {
    res.json(employee);
  });
}

module.exports = {
  employee: employee
};
