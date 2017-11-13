"use strict";

var util = require("util");
var db = require("../../db/db");

function employee(req, res) {
  console.log(req.swagger.params);
  var id = req.swagger.params.uid.value;
  db.employee(id, function(employee) {
    res.json(employee);
  });
}

module.exports = {
  employee: employee
};
