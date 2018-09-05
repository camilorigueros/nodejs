'use strict'

var mongoose = require('mongoose');
var app = require('./api');
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://1752.20.11.250:27017/DBAuditoria')
.then(() =>{
	console.log('conexion exitosa');
	app.listen(port, ()  => {
		console.log('servidor local con node y express esta corriendo.');		
	});
})
.catch(err => console.log(err));
