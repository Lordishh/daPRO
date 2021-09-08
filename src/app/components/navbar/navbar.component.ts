import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _usuarios: UsuariosService) {
    this._usuarios.isAuthenticate().subscribe((login) => {
      this.isLogin = login;
    });
  }
  logout() {
    this._usuarios.logout();
  }
  ngOnInit(): void {}
}
