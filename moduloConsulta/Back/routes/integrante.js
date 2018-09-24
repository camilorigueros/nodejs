'use strict'

var express = require('express');
var IntegranteController = require('../controllers/integrante');

var api = express.Router();
var md_auth = require('../middleware/authenticated');
var md_admin = require('../middleware/is_admin');


api.post('/consultaAuditoria', IntegranteController.consultarAuditoria);
api.post('/consultarAuditoriaFiltro', IntegranteController.consultarAuditoriaFiltro);
api.post('/login', IntegranteController.login);

module.exports = api;