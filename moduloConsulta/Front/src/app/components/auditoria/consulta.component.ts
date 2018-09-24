import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Column, Settings, DataTable} from '../../../ng-data-table';
import {getColumnsPlayers} from './columns';
import {IntegranteService } from '../../servicios/integrante.service';
import {Auditoria } from '../../models/auditoria';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService } from '../filtros/question.service';
import {FiltroConsultaAud} from '../../models/filtroConsultaAud';


@Component({
  selector: 'consulta',
  templateUrl: './consulta.component.html',
  providers:  [QuestionService]
})

export class ConsultaComponent implements OnInit {

  columns: Column[];
  table: DataTable;

  public auditoria: Auditoria;
  public status: String;
  public filtroForm: FormGroup;
  public filtroConsulta: FiltroConsultaAud;
  
  aplicativos: any[];

  settings: Settings = <Settings>{
    clientSide: true,
    columnResizeMode: 'aminated',
  };

  constructor(
	  private http: HttpClient,
    private _integranteService: IntegranteService,
    private fb: FormBuilder
   ) {
    this.filtroConsulta = new FiltroConsultaAud('','','','','','','','');
    this.columns = getColumnsPlayers();
    this.table = new DataTable(this.columns, this.settings);
    this.aplicativos = [
          {key: '1',  value: 'PLATINUM'},
          {key: '2',  value: 'PCM'},
          {key: '3',  value: 'INTERPOL'}
        ]; 
  }

  ngOnInit() {
    this.table.events.onLoading(true);
    this._integranteService.consultarAuditoria().subscribe(data => {
      this.table.rows = data.datos;
      this.table.events.onLoading(false);
    });

  }


  consultaAuditoria(){
    this.table.events.onLoading(true);

    if(this.filtroConsulta == null){
      this._integranteService.consultarAuditoria().subscribe(
        response=>{
          this.auditoria = response.datos;

          if(this.auditoria == null){
            this.status = 'error';
          }else{
            this.table.rows = response.datos;
          }
          this.table.events.onLoading(false);
        },
        error =>{
         console.log(error);
          var msg = <any>error;
          if(msg != null){
            var body = JSON.parse(msg._body);
            this.status = 'error';
          }
          this.table.events.onLoading(false);
        }
      );  
    }else{
       this._integranteService.consultarAuditoriaFiltro(this.filtroConsulta).subscribe(
        response=>{
          this.auditoria = response.datos;

          if(this.auditoria == null){
            this.status = 'error';
          }else{
            this.table.rows = response.datos;
          }
          this.table.events.onLoading(false);
        },
        error =>{
         console.log(error);
          var msg = <any>error;
          if(msg != null){
            var body = JSON.parse(msg._body);
            this.status = 'error';
          }
          this.table.events.onLoading(false);
        }
      );  
    }  
  }

}