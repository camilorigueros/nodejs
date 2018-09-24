export class FiltroConsultaAud{
	constructor(
		public aplicativo: string,
		public uuid: string,
		public numReferencia: string,
		public fechaIni: string,
		public fechaFin: string,
		public nombres: string,
		public primerApellido: string,
		public segundoApellido: string
	){

	}
}