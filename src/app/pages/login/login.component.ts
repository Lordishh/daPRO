import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private _snackbar: MatSnackBar,
    private _usuarios: UsuariosService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ingresar() {
    console.log(this.formLogin);
    //Conecto con api o firebase y si es correcto cambio con el estado de autenticación

    //HARDCODE
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    if (email == 'pepe' && password == '123') {
      this.fakeLoading();
      this._usuarios.authenticate();
      this._snackbar.open('Bienvenido', 'cerrar', {
        duration: 10000,
      });
    } else {
      //Mensaje error
      this.error();
    }
  }

  error() {
    this._snackbar.open('Email o contraseña ingreso son inválidos', 'cerrar', {
      duration: 10000,
    });
    alert('Hardcode = Email: "pepe" && Password: "123"');
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1500);
  }

  ngOnInit(): void {}
}
