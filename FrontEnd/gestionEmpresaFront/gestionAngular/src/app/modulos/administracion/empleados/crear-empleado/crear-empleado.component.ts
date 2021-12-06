import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modulos/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres':['', [Validators.required]],
    'apellidos':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'fechaNacimiento':['', [Validators.required]],
    'salario':['', [Validators.required]],
    'esDirectivo':['', [Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioEmpleado: EmpleadoService,
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

}
