'use strict'

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var routes = require('./routes/auditoriaRoutes');

//rutas
app.use('/mig', routes);


module.exports = app;
