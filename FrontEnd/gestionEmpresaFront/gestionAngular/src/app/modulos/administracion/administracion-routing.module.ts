import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './empleados/listar-empleados/listar-empleados.component';

const routes: Routes = [
  {
    path: 'crear-empleado',
    component: CrearEmpleadoComponent
  },
  {
    path: 'editar-empleado',
    component: EditarEmpleadoComponent
  },
  {
    path: 'listar-empleados',
    component: ListarEmpleadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
