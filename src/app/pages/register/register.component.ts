import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  cantidad: Number = 0;
  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  registrarse() {
    console.log(this.myForm.value);
    this._snackbar.open('Gracias por registrarse', 'cerrar', {
      duration: 10000,
    });
  }
  ngOnInit(): void {}
}
