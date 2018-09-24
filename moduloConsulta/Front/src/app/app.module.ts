import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent} from './not-found.component';
import { DataTableModule } from '../ng-data-table';
import { ModalModule } from '../lib//modal';
import {ReactiveFormsModule} from '@angular/forms';

//Componentes
import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultaComponent } from './components/auditoria/consulta.component';
//servicios
import { IntegranteService } from './servicios/integrante.service';
import { DynamicFormComponent }         from './components/filtros/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/filtros/dynamic-form-question.component';


//Routing
import { routing ,appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConsultaComponent,
    HomeComponent,
    LoginComponent,
    DynamicFormComponent, 
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    ModalModule,
	  HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [IntegranteService,appRoutingProviders],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
