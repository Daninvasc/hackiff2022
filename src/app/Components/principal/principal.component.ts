import { Component, DoCheck, OnInit } from '@angular/core';
import { NotificadorService } from 'src/app/services/notificador.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit, DoCheck {

  constructor(private notificadorService: NotificadorService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.notificadorService.listener.subscribe(mensagem => {
      alert(mensagem);
    });
  }

  enviarNotificacao(mensagem: string) {
    this.notificadorService.enviarNotificacao(mensagem);
  }

}
