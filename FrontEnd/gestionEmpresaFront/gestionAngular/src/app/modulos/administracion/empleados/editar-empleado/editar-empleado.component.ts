import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleados } from 'src/app/modelos/epleados.modelo';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombres': ['',[Validators.required]],
    'apellidos': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'direccion': ['',[Validators.required]],
    'email': ['',[Validators.required]],
    'edad': ['',[Validators.required]],
    'fechaNacimiento': ['',[Validators.required]],
    'salario': ['',[Validators.required]],
    'esDirectivo': ['',[Validators.required]],
    'empresaId': ['',[Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private servicioEmpleado: EmpleadosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarEmpleado();
  }

  BuscarEmpleado(){
    this.servicioEmpleado.ObtenerRegistrosId(this.id).subscribe((datos:ModeloEmpleados)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.Nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.Apellidos);
      this.fgValidador.controls["telefono"].setValue(datos.Telefono);
      this.fgValidador.controls["direccion"].setValue(datos.Direccion);
      this.fgValidador.controls["email"].setValue(datos.Email);
      this.fgValidador.controls["edad"].setValue(datos.Edad);
      this.fgValidador.controls["fechaNacimiento"].setValue(datos.FechaNacimiento);
      this.fgValidador.controls["salario"].setValue(datos.Salario);
      this.fgValidador.controls["esDirectivo"].setValue(datos.EsDirectivo);
      this.fgValidador.controls["empresaId"].setValue(datos.empresaId);
  });
  }

  EditarEmpleado(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let email = this.fgValidador.controls["email"].value;
    let edad = this.fgValidador.controls["edad"].value;
    let fechaNacimiento = this.fgValidador.controls["fechaNacimiento"].value;
    let salario = this.fgValidador.controls["salario"].value;
    let esDirectivo = this.fgValidador.controls["esDirectivo"].value;
    let empresaId = this.fgValidador.controls["empresaId"].value;
    let e = new ModeloEmpleados();
    e.Nombres = nombres;
    e.Apellidos = apellidos;
    e.Telefono = telefono;
    e.Direccion = direccion;
    e.Email = email;
    e.Edad = edad;
    e.FechaNacimiento = fechaNacimiento;
    e.Salario = salario;
    e.EsDirectivo = esDirectivo;
    e.empresaId = empresaId;
    e.Id = this.id;
    this.servicioEmpleado.ActualizarEmpleado(e).subscribe({next:(datos:ModeloEmpleados)=>{
      swal("Empleado editado correctamente","","success");
      this.router.navigate(["/administracion/listar-empleados"]);
    },error:(error: any)=>{
      swal("Error al editar datos del empleados","","error");
    }
    })
  }

}
