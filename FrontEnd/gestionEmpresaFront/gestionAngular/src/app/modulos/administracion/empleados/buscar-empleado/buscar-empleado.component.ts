import { Component, OnInit } from '@angular/core';
import { ModeloEmpleados } from 'src/app/modelos/epleados.modelo';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {
listadoRegistros: ModeloEmpleados[] = [];
  constructor(private empleadosServicios: EmpleadosService ) { }

  ngOnInit(): void {
    this.ObtenerListadoEmpleados();
  }

  ObtenerListadoEmpleados(){
    this.empleadosServicios.ObtenerRegistros().subscribe((datos: ModeloEmpleados[]) => {
      this.listadoRegistros = datos;
    })
  }

}
