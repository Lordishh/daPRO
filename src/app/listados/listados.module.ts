import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccionesComponent } from './acciones/acciones.component';
import { FiltrosComponent } from './filtros/filtros.component';

@NgModule({
  declarations: [AccionesComponent, FiltrosComponent],
  imports: [CommonModule],
  exports: [AccionesComponent],
})
export class ListadosModule {}
