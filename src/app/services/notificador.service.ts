import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class NotificadorService {
  listener = this.socket.fromEvent('notificacao');
  constructor(private socket: Socket) { }

  notificar(mensagem: string) {
    this.socket.emit('notificacao', mensagem);
  }

  enviarNotificacao(mensagem: string) {
    this.socket.emit('notificacao', mensagem);
  }
}
