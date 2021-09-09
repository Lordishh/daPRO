import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'productos/:id', component: DetalleComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'reportes', component: ReportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
