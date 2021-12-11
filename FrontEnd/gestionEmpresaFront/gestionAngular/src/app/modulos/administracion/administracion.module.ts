import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';
import { EliminarEmpresaComponent } from './empresas/eliminar-empresa/eliminar-empresa.component';
import { BuscarEmpresaComponent } from './empresas/buscar-empresa/buscar-empresa.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    BuscarClienteComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    EliminarEmpresaComponent,
    BuscarEmpresaComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EliminarEmpleadoComponent,
    BuscarEmpleadoComponent,

  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
