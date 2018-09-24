import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class IntegranteService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	consultarAuditoria(){
		let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'consultaAuditoria', {headers:headers}).map(res => res.json());
	}

	consultarAuditoriaFiltro(filtroConsulta){
		let headers = new Headers({'Content-Type':'application/json'});
		let params = JSON.stringify(filtroConsulta);
		return this._http.post(this.url+'consultarAuditoriaFiltro',params, {headers:headers}).map(res => res.json());
	}
	
}
