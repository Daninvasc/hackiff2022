import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY/DD/MM',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-visualizar-dados',
  templateUrl: './visualizar-dados.component.html',
  styleUrls: ['./visualizar-dados.component.sass'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
})
export class VisualizarDadosComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, public datepipe: DatePipe, private http: HttpClient) { }
  podeExibir = false;
  stringUrl: SafeResourceUrl = '';
  tipoMapa = '0';
  dateIni = new FormControl(new Date());
  dateFim = new FormControl(new Date());
  dataIniParam = '';
  dataFimParam = '';
  status = '3';

  ngOnInit(): void {
    // this.stringUrl = this.retornaStringLimpa('https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47j0wbj1us8vyuk63w82nax1o4aa1hkkr127qimod5&rid=giphy.gif&ct=g');
  }

  async enviarDadosApi() {
    this.stringUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://ace0-45-226-116-227.sa.ngrok.io/api' + this.montaParametros());
    
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'text/html');
    header = header.set('Accept', 'text/html');
    header = header.set('Access-Control-Allow-Origin', '*');
    // const response = await this.http.get('http://ace0-45-226-116-227.sa.ngrok.io/api' + this.montaParametros(), { headers: header }).toPromise();
    // console.log(response);
    
    this.podeExibir = true;
    this.podeExibir = true;
  }

  trocarStringUrl() {
    this.podeExibir = false;
  }

  retornaStringLimpa(string: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }

  formatarData(data: Date) {
    console.log(data);    
    return `${data.getFullYear()}/${data.getMonth() + 1 }/${data.getDate()}`;
  }

  selecionaData($event: any, tipo: string) {
    if (tipo === 'ini') {
      this.dataIniParam = this.formataStringData($event);      
    } else {
      this.dataFimParam = this.formataStringData($event);
    }  
  }

  formataStringData(data: string) {
    const dia  = data.split("/")[0];
    const mes  = data.split("/")[1];
    const ano  = data.split("/")[2];

    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  }

  montaParametros() {
    return `?status=${this.status}&heat_map=${this.tipoMapa}&data_ini=${this.dataIniParam}&data_fim=${this.dataFimParam}`;
  }

}
