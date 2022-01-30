import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/Servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required/*, Validators.email*/]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  IdentificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe({
      next: (datos: any) => {
        this.servicioSeguridad.AlmacenarSesion(datos);
        this.router.navigate(["/inicio"]);
        swal("Bienvenido a", "Gestión Empresas", "success");
      }, error: (error: any) => {
        //KO
        swal("Error", "Datos Invalidos", "error");
      }
    })
  }
}