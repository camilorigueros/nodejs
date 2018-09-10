'use strict'

var Auditoria = require("../entidades/auditoria")

function probar(req, res) {
    res.status(200).send({
	   message: "probar",
	   req : req
	});
};

function guardarAuditoria(req, res) {
	var auditoria = new Auditoria();

	try{
		var params = req.body;
		
		auditoria.uuid   =  params.uuid;
		auditoria.fecha_registro =  params.fecha_registro;
		auditoria.tipo_documento =  params.tipo_documento;
		auditoria.numero_documento =  params.numero_documento;
		auditoria.nombre =  params.nombre;
		auditoria.primer_apellido =  params.primer_apellido;
		auditoria.segundo_apellido =  params.segundo_apellido;
		auditoria.fecha_nacimiento =  params.fecha_nacimiento;
		auditoria.id_correlacion =  params.id_correlacion;
		auditoria.nombre_servicio =  params.nombre_servicio;
		auditoria.tipo_solicitud =  params.tipo_solicitud;
		auditoria.fecha_insert =  params.fecha_insert;
		auditoria.nombre_operacion =  params.nombre_operacion;
		auditoria.per_nodo =  params.per_nodo;
		auditoria.per_codigo =  params.per_codigo;
		auditoria.ip_consumidor =  params.ip_consumidor;
		auditoria.funcionario =  params.funcionario;
		auditoria.punto_control =  params.punto_control;
		auditoria.sistema_origen =  params.sistema_origen;
					
		if (params.payload !=null){
			//auditoria.payload =  JSON.parse(params.payload);
			/*
			 * Desde El OSB debe quedar sin parseo enviando en json
			 */
			auditoria.payload =  params.payload;
		}else{
			auditoria.payload= null;
		}
		
		
		auditoria.save((err, aud) => {
			if(err){
				res.status(500).send({
					message:'Error: Guardando Auditoria',err
				});		   
			}else{
				if(!aud){
					res.status(400).send({
						message:"No se creo el registro de auditoria"
					});
				}else{
					res.status(200).send({
						message:"Auditoria Registrada",
						auditoria: aud
					});
				}
			}
		});
	}catch(error){
		console.error(error);
	}
	
};


module.exports = {
	probar,
	guardarAuditoria
};