import { Component, OnInit } from '@angular/core';
import { ModeloEmpresas } from 'src/app/modelos/empresas.modelo';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {
  listadoRegistros: ModeloEmpresas[] = [];
  constructor(private empleadosServicios: EmpleadosService ) { }

  ngOnInit(): void {
    this.ObtenerListadoEmpresas();
  }

  ObtenerListadoEmpresas(){
    this.empleadosServicios.ObtenerRegistros().subscribe((datos: ModeloEmpresas[]) => {
      this.listadoRegistros = datos;
    })
  }

}
