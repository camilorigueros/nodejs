'use strict'

var mongoose = require('mongoose');
var app = require('./api');
var port = 8001;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo:27017/DBAuditoria')
.then(() =>{
	console.log('conexion exitosa');
	app.listen(port, ()  => {
		console.log('servidor local con node y express esta corriendo.');		
	});
})
.catch(err => console.log(err));
