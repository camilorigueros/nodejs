'use strict'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();

//cargar rutas
var integrante_routes = require('./routes/integrante');
//middlewares de body-parser
//nos convierte lo que venga en el body en un json usable
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());


//configurar cabecera y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');    

	next();
});

//rutas base
app.use('/api', integrante_routes);

module.exports = app;