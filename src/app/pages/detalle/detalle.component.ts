import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  producto: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.getProductos(id);
    }
  }

  async getProductos(id: string) {
    this.producto = await this.productosService.getById(id);
  }

  ngOnInit(): void {}
}
