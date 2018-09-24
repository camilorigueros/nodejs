'use strict'


exports.isAdmin = function(req, res, next){
	if(req.integrante.rol != 'Admin'){
		return res.status(200).send({message : 'No tienes acceso a esta zona'});
	}

	next();
}