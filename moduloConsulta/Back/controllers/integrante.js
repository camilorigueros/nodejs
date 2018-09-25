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
	var fecha_registro = filtroFechas(req.body,res);

	Auditoria.find({  fecha_registro
	}).exec((err, datos) => {
		if(err){
			res.status(500).send({message: 'Error en la consulta'});
		}else{
			res.status(200).send({datos});
		}
	});
}

function filtroFechas(req,res){
	var fechas= [];

	if(req.fechaIni != '' && req.fechaFinal != ''){
		var fechaInicial = req.fechaIni+"T00:00:00.000";
		var fechaFinal = req.fechaFin+"T23:59:59.000";
	
		fechas.push({"$gte" : fechaInicial,"$lt" :fechaFinal}) ;
	}
	return fechas[0];
}

function filtroUuid(req,res){
	var filtro= [];

	if(req.uuid != ''){
		filtro.push({"uuid" : req.uuid}) ;
	}
	return filtro[0];
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