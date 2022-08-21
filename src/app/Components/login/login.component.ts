import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  email = '';
  senha = '';

  ngOnInit(): void {
    if (this.verificaUsuarioSenhaLocalStorage()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    localStorage.setItem('usuario', this.email);
    localStorage.setItem('senha', this.senha);
    this.router.navigate(['/dashboard']);
  }

  verificaUsuarioSenhaLocalStorage() {
    return localStorage.getItem('usuario') != null && localStorage.getItem('senha') != null;
  }

}
