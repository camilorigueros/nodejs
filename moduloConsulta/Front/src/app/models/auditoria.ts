export class Auditoria{
	constructor(
		public _id: string,
		public uuid: String,
		public fecha_registro: String,
		public tipo_documento: String,
		public numero_documento: String,
		public nombre: String,
		public primer_apellido: String,
		public segundo_apellido: String,
		public fecha_nacimiento: Date,
		public id_correlacion: String,
		public nombre_servicio: String,
		public tipo_solicitud: String,
		public fecha_insert: String,
		public nombre_operacion: String,
		public per_nodo: String,
		public per_codigo: String,
		public ip_consumidor: String,
		public funcionario: String,
		public punto_control: String,
		public sistema_origen: String
	){

	}
}