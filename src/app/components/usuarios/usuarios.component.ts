import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
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

  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'genero',
    'acciones',
  ];

  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor() {}

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
