import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  user = '';
  ngOnInit(): void {
    this.pegaUserLocalStorage();
  }

  pegaUserLocalStorage() {
    this.user = localStorage.getItem('usuario') as string;
  }

  fazerLogout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('senha');
    this.user = '';
    this.router.navigate(['/login']);
  }

}
