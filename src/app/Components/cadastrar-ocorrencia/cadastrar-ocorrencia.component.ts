import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { urlApi } from 'src/contantes';

interface IOcorrencia {
  nome_autor?: string;
  descricao?: string;
  tipo?: string;
  prioridade?: string;
  endereco?: string;
}
@Component({
  selector: 'app-cadastrar-ocorrencia',
  templateUrl: './cadastrar-ocorrencia.component.html',
  styleUrls: ['./cadastrar-ocorrencia.component.sass']
})
export class CadastrarOcorrenciaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ocorrencia = {} as IOcorrencia;
  coordsInicial = {
    lat: -21.742561,
    lng: -41.334329,
  };
  configMapa = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  }

  ngOnInit(): void {
  }

  cadastrarOcorrencia() {
    const response = this.http.post(urlApi, this.ocorrencia).toPromise();
    console.log(response);
    console.log(this.ocorrencia);
  }

}
