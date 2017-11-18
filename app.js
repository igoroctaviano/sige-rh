"use strict";

var db = require("./db/db");
var SwaggerExpress = require("swagger-express-mw");
var SwaggerTools = require("swagger-tools");
var YAML = require("yamljs");
var swaggerDoc = YAML.load("api/swagger/swagger.yaml");
var app = require("express")();
var config = {
  appRoot: __dirname
};

SwaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  app.use(middleware.swaggerUi());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.get("/", function(req, res) {
    res.redirect("/docs");
  });
});

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }

  swaggerExpress.register(app);
  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log("App running on port " + port + "!");

  db.initialize(function() {
    console.log("Database initialized successfully!");
  });
});

module.exports = app;
