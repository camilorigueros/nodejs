import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultaComponent } from './components/auditoria/consulta.component';


const appRoutes: Routes = [
	{path:'', redirectTo: 'home', pathMatch: 'full'},
	{path:'home', component: HomeComponent},
	{path:'login', component: LoginComponent},
	{path:'consulta', component: ConsultaComponent},
	{path:'**', component: HomeComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);