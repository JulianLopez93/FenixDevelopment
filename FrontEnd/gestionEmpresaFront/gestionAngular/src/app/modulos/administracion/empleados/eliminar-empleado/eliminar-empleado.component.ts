import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleados } from 'src/app/modelos/epleados.modelo';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';
import swal from 'sweetalert';
import  ButtonList  from 'node_modules/sweetalert/typings/modules/init/buttons';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent implements OnInit {
  id: string = "";
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
  })
  constructor(
    private fb: FormBuilder,
    private servicioEmpleado: EmpleadosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    swal({
      title: "Está seguro?",
      text: `De eliminar el registro ${this.id}`,
      icon: "warning",
      buttons: ["Cancel","OK"], 
      dangerMode: true,  
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Se eliminará el registro!", {
          icon: "success",});
          this.BorrarEmpleado();     
      } else {
        swal("El registro no se eliminará!");
        this.router.navigate(["/administracion/listar-empleados"]);
      }
    });
  }

  // BuscarEmpleado() {
  //   this.servicioEmpleado.ObtenerRegistrosId(this.id).subscribe((empleado: ModeloEmpleados) => {
  //     this.fgValidador.controls["id"].setValue(this.id);
  //   });
  // }

  BorrarEmpleado() {
    this.servicioEmpleado.EliminarEmpleado(this.id).subscribe({next:(empleado: ModeloEmpleados) => {
      swal("Empleado eliminado correctamente","","success");
      this.router.navigate(["/administracion/listar-empleados"]);
    },error:(error: any)=>{
      swal("Error al eliminar datos del empleados","","error");
    }
    });

  }

}
