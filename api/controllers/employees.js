"use strict";

var util = require("util");
var db = require("../../db/db");

function employees(req, res) {
  db.getEmployees(function(employees) {
    res.json(employees);
  });
}

module.exports = {
  employees: employees
};
