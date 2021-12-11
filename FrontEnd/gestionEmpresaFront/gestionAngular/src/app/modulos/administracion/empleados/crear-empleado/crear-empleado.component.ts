import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleados } from 'src/app/modelos/epleados.modelo';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
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
  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadosService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  GuardarEmpleado()
  {
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let fechaNacimiento = this.fgValidador.controls["fechaNacimiento"].value;
    let salario = parseInt(this.fgValidador.controls["salario"].value);
    //let esDirectivo = parseBooolean(this.fgValidador.controls["esDirectivo"].value);

    let e = new ModeloEmpleado();

    e.Nombres = nombres;
    e.Apellidos = apellidos;
    e.Telefono = telefono;
    e.Email = correo;
    e.FechaNacimiento = fechaNacimiento;
    e.Salario = salario;
    //e.esDirectivo = esDirectivo;

    this.servicioEmpleado.CrearEmpleado(e).subscribe((datos: ModeloEmpleado) => {
      alert("Empleado almacenado correctamente");
      this.router.navigate(["/administracion/listar-empleados"])

    }, (error: any) =>{
      alert("Error al almacenar el empleado");
    })

  }

  GuardarEmpleado(){
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
    this.servicioEmpleado.CrearEmpleado(e).subscribe({next:(datos:ModeloEmpleados)=>{
      swal("Empleado ingresado correctamente","success");
      this.router.navigate(["/administracion/listar-empleados"]);
    },error:(error: any)=>{
      swal("Error al ingresar datos del empleados","error");
    }
    })
  }

}
