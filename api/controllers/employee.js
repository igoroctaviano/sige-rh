"use strict";

var util = require("util");
var db = require("../../db/db");

function getEmployee(req, res) {
  var uid = req.swagger.params.uid.value;
  db.get("employee", uid, function(employee) {
    res.json(employee);
  });
}

function allEmployees(req, res) {
  db.all("employee", function(employees) {
    res.json(employees);
  });
}

function saveEmployee(req, res) {
  db.save("employee", req.body, function() {
    res.json({ success: 1, description: "Employee saved!" });
  });
}

function updateEmployee(req, res) {
  db.update("employee", req.body, function() {
    res.json({ success: 1, description: "Employee updated!" });
  });
}

function removeEmployee(req, res) {
  var uid = req.swagger.params.uid.value;
  db.remove("employee", uid, function() {
    res.json({ success: 1, description: "Employee removed!" });
  });
}

function allEmployeeTypes(req, res) {
  db.all("employee/type", function(employeeTypes) {
    res.json(employeeTypes);
  });
}

module.exports = {
  getEmployee,
  allEmployees,
  saveEmployee,
  updateEmployee,
  removeEmployee,
  allEmployeeTypes
};