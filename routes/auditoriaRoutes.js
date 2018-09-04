'use strict'

var express = require("express");
var AuditoriaControllers = require("../controllers/auditoriaMethods");

var api = express.Router();

api.get('/probar',AuditoriaControllers.probar);
api.post('/guardarAuditoria',AuditoriaControllers.guardarAuditoria);

module.exports = api;
