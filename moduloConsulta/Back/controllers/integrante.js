'use strict'
var bcryp = require('bcrypt-nodejs');

//modelos
var Integrante = require('../models/integrante');
var Auditoria = require('../models/auditoria');
//servicio jwt
var jwt = require('../service/jwt');
//acciones../


function consultarAuditoria(req,res){
	Auditoria.find({}).exec((err, datos) => {
		if(err){
			res.status(500).send({message: 'Error en la consulta'});
		}else{
			res.status(200).send({datos});
		}
	});
}


function consultarAuditoriaFiltro(req,res){
	Auditoria.find({ 
		"fecha_registro" : {"$gte": ISODate(req.body.fechaIni) ,"$lt":ISODate(req.body.fechaFin)  }
	}).exec((err, datos) => {
		if(err){
			res.status(500).send({message: 'Error en la consulta'});
		}else{
			res.status(200).send({datos});
		}
	});
}


function login(req,res){

	var integrante = new Integrante();
	var params = req.body;

	Integrante.findOne({nombre: params.nombre},
		(err,user) => {
		if(err){
			res.status(500).send({message: 'Error al buscar integrante'});
		}else{
			if(user){
				//comprobar y generar token
				if(params.gettoken){
					//devolver token jwt
					res.status(200).send({
						token:jwt.createToken(user)
					})
				}else{
					res.status(200).send({user});	
				}
				
			}else{
				res.status(404).send({message:'no se logeo bien'});
			}
		}
	});
	
}


module.exports = {
	login,
	consultarAuditoria,
	consultarAuditoriaFiltro
}