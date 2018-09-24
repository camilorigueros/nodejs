'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IntegranteSchema = Schema({
	nombre: String,
	ingresos: String,
	edad: Number,
	rol: String,
	correo: String,
	clave: String
});

module.exports = mongoose.model('Integrante', IntegranteSchema);
