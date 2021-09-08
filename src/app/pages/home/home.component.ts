import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  loading: boolean = true;

  constructor(private productosService: ProductosService) {
    this.getProductos();
  }

  async getProductos() {
    //promise
    const response: any = await this.productosService.getAll();
    console.log('Response', response);
    this.productos = response.results;
    this.loading = false;
  }
  ngOnInit(): void {}
}
