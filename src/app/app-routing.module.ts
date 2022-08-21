import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './Components/container/container.component';
import { GeralComponent } from './Components/geral/geral.component';
import { LoginComponent } from './Components/login/login.component';
import { VisualizarDadosComponent } from './Components/visualizar-dados/visualizar-dados.component';

const routes: Routes = [
  { path: '', component: GeralComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: ContainerComponent, children: [
    { path: '', component: VisualizarDadosComponent },
    { path: 'visualizar-dados', component: VisualizarDadosComponent }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
