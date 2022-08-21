import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { ContainerComponent } from './Components/container/container.component';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VisualizarDadosComponent } from './Components/visualizar-dados/visualizar-dados.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { GeralComponent } from './Components/geral/geral.component';
import { CadastrarOcorrenciaComponent } from './Components/cadastrar-ocorrencia/cadastrar-ocorrencia.component';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContainerComponent,
    HeaderComponent,
    LoginComponent,
    VisualizarDadosComponent,
    GeralComponent,
    CadastrarOcorrenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MomentDateModule,
    MatIconModule,
    GoogleMapsModule,
    NgxMaskModule.forRoot(),
    SocketIoModule.forRoot({ url: 'http://localhost:3000', options: { transports: ['websocket'] } })
  ],
  exports: [
    MatRadioModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
