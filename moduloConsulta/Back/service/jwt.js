'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'qwerty123';

exports.createToken = function(user){
	var payload = {
		sub: user._id,
		name: user.nombre,
		ingresos: user.ingresos,
		edad: user.edad,
		iat: moment().unix(),
		exp: moment().add(30, 'days').unix
	};
	return jwt.encode(payload, secret )
};