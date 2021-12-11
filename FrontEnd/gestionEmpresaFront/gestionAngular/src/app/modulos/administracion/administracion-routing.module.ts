import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { BuscarEmpresaComponent } from './empresas/buscar-empresa/buscar-empresa.component';
import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';
import { EliminarEmpresaComponent } from './empresas/eliminar-empresa/eliminar-empresa.component';

const routes: Routes = [

  //Clientes
  {
    path:"crear-cliente",
    component: CrearClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-cliente",
    component: EditarClienteComponent,
    canActivate: [ValidadorSesionGuard]
    
    
  },
  {
    path:"buscar-cliente",
    component: BuscarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-cliente",
    component: EliminarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },

  //Empleados
  {
    path:"crear-empleado",
    component: CrearEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-empleado/:id",
    component: EditarEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-empleado/:id",
    component: EliminarEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "listar-empleados", 
    component: BuscarEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },

  //Empresa

  {
    path:"crear-empresa",
    component: CrearEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-empresa",
    component: EditarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"buscar-empresa",
    component: BuscarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-empresa",
    component: EliminarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
