import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) {
    this.verificarSesionActual();
  }

  verificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarEmpleado`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({
      })
    })
  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem("datosSesion");
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos;
    }else { 
      return null;
    }
  }

  EliminarInformacionSesion() {
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
    // let cerrar = confirm("¿Seguro que desea cerrar la sesión?")
    // if(cerrar){
      
    // }
  }

  seHaIniciadoSesion() {
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  ObtenerToken() {
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{
      return '';
    }
  }

}
