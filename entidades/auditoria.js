var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var auditoriaShema = new Schema({
  uuid:    { type: String },
  fecha_registro:   { type: Date },
  tipo_documento:  { type: String },
  numero_documento:  { type: String },
  nombre:  { type: String },
  primer_apellido:  { type: String },
  segundo_apellido:  { type: String },
  fecha_nacimiento:   { type: Date },
  id_correlacion:  { type: String },
  nombre_servicio:  { type: String },
  tipo_solicitud:  { type: String },
  fecha_insert:  { type: Date },
  nombre_operacion:  { type: String },
  per_nodo:  { type: Number },
  per_codigo:  { type: Number },
  ip_consumidor:  { type: String },
  funcionario:  { type: String },
  punto_control:  { type: String },
  sistema_origen:  { type: String },
  payload:    { type: Object }
});

module.exports = mongoose.model('auditoria', auditoriaShema);