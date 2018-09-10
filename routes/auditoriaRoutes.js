'use strict'

var express = require("express");
var AuditoriaControllers = require("../controllers/auditoriaMethods");

var api = express.Router();

api.post('/probar',AuditoriaControllers.probar);
api.post('/guardarAuditoria',AuditoriaControllers.guardarAuditoria);

module.exports = api;
