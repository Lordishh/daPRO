import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { DescuentoPipe } from './descuento.pipe';
import { IvaPipe } from './iva.pipe'; //Incluir
import { ListadosModule } from './listados/listados.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MaterialModule } from './material.module';
import { ProductoComponent } from './components/producto/producto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ReportesComponent } from './components/reportes/reportes.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RegisterComponent,
    CatalogoComponent,
    LoginComponent,
    DetalleComponent,
    DescuentoPipe,
    IvaPipe,
    ProductoComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadosModule,
    HttpClientModule, //Incluir
    FormsModule, //Incluir
    ReactiveFormsModule,
    BrowserAnimationsModule, //Incluir
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
