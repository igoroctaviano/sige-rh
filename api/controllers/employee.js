"use strict";

var util = require("util");
var db = require("../../db/db");

function employee(req, res) {
  var employeeId = req.params.employeeId;
  db.getEmployee(function(employeeId, employee) {
    res.json(employee);
  });
}

module.exports = {
  employee: employee
};
