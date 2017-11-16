"use strict";

var util = require("util");
var db = require("../../db/db");

function getEmployees(req, res) {
  db.employees(function(employees) {
    res.json(employees);
  });
}

function selectEmployee(req, res) {
  var id = req.swagger.params.uid.value;
  db.employee(id, function(employee) {
    res.json(employee);
  });
}

function saveEmployee(req, res) {
  res.json({ success: db.push(req.body), description: "Employee saved!" });
}

function deleteEmployee(req, res) {
  var id = req.swagger.params.uid.value;
  db
    .child(id)
    .remove(function(error) {
      res.status(204).send(error);
    })
    .then(function() {
      res.json({ success: 1, description: "Employee deleted!" });
    });
}

module.exports = {
  getEmployees,
  selectEmployee,
  saveEmployee,
  deleteEmployee
};
