"use strict";

var util = require("util");
var db = require("../../db/db");

function employeesRequest(req, res) {
	res.json({ success: 1, description: "Ok, requisição recebida!" });
}

module.exports = {
  employeesRequest,
};