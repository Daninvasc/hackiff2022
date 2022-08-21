import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarOcorrenciaComponent } from './Components/cadastrar-ocorrencia/cadastrar-ocorrencia.component';
import { ContainerComponent } from './Components/container/container.component';
import { GeralComponent } from './Components/geral/geral.component';
import { LoginComponent } from './Components/login/login.component';
import { VisualizarDadosComponent } from './Components/visualizar-dados/visualizar-dados.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: ContainerComponent, children: [
    { path: '', component: VisualizarDadosComponent },
    { path: 'visualizar-dados', component: VisualizarDadosComponent },
    { path: 'cadastrar-ocorrencia', component: CadastrarOcorrenciaComponent }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
