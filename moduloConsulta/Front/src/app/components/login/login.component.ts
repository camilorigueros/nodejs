import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {IntegranteService} from '../../servicios/integrante.service';
import {Integrante} from '../../models/integrante';

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
	public title: String;
	public integrante: Integrante;
	public status: String;
	public token;
	public identity;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _integranteService: IntegranteService

	){
		this.title = 'Login';
		this.integrante = new Integrante('','','','','','','');
	}

	ngOnInit(){
		console.log('login.component cargado');
	}

	onSubmit(){
		console.log(this.integrante);
	}

	

}