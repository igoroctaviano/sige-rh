"use strict";

var db = require("./db/db");

var SwaggerExpress = require("swagger-express-mw");
var SwaggerTools = require("swagger-tools");
var YAML = require("yamljs");

var swaggerDoc = YAML.load("api/swagger/swagger.yaml");

var app = require("express")();

var config = {
  appRoot: __dirname // required config
};

SwaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
  app.get('/', function(req, res) {
    res.redirect('/docs');
  });
});

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/hello"]) {
    console.log(
      "try this:\ncurl http://127.0.0.1:" + port + "/hello?name=Igor"
    );
  }

  db.refresh(function() {
    console.log("Database refreshed successfully!");
  });
});

module.exports = app; // for testing
