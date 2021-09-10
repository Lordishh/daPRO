import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariolistService {
  listUsuarios: Usuario[] = [
    {
      usuario: 'pepe',
      nombre: 'Pepito',
      apellido: 'Pepon',
      genero: 'Masculino',
    },
    {
      usuario: 'fvictori',
      nombre: 'Fabian',
      apellido: 'Victori',
      genero: 'Masculino',
    },
    {
      usuario: 'paloma',
      nombre: 'Paloma',
      apellido: 'Geré',
      genero: 'Femenino',
    },
    {
      usuario: 'smartinez',
      nombre: 'Sandra',
      apellido: 'Martinez',
      genero: 'Femenino',
    },
    {
      usuario: 'mfer',
      nombre: 'Mauro',
      apellido: 'Fernandez',
      genero: 'Masculino',
    },
    {
      usuario: 'lordz',
      nombre: 'Lautaro',
      apellido: 'Conrrado',
      genero: 'Masculino',
    },
  ];

  constructor() {}

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }
}
