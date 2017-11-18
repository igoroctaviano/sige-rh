"use strict";

var util = require("util");
var db = require("../../db/db");
var axios = require("axios");

function sendJobAnnouncement(req, res) {
  var announcement = {
    uid: "",
    employeeTypes: req.body.employeeTypes
  };

  db.save("announcement", announcement, function(announcement) {
    var instance = axios.create({
      baseURL: "https://cc21633f.ngrok.io",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    instance
      .post("https://cc21633f.ngrok.io/vagas", announcement)
      .then(function(response) {
        console.log(response);
      }).catch(function(error) {
				console.log("Ops! Fail to [POST] announcement! Look: " + error.message);
			});
  });
}

module.exports = {
  sendJobAnnouncement
};

/* fetch("https://cc21633f.ngrok.io/vagas", {
	method: "POST",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	},
	body: JSON.stringify({
		uid: "teste",
		employeeTypes: this.state.selectedEmployeeTypes
	})
}); */
