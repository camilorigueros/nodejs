'use strict'

var mongoose = require('mongoose');
var app = require('./api');
var port = process.env.PORT || 3780;


function conexion() {
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://172.20.11.250:27017/DBAuditoria', (err, res) => {
		if (err) {
			console.log('Error al conectar a la base de datos.');
			throw err;
		} else {
			console.log('La conexión a la base de datos se ha realizado correctamente...');
			app.listen(port, () => {
			console.log("El servidor local está corriendo correctamente escuchando por el puerto 3789...");
			})
		}
	});
}
setTimeout(conexion, 10000);