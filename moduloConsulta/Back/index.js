'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

//Elimina Warining
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.20.11.250:27017/DBAuditoria')
	.then(() => {
		console.log('la conexion a base de datos es correcta.');		
		
		app.listen(port,() => {
			console.log("servidor local con node y expres esta corriendo")
		});
	})
	.catch(err => console.log(err));
