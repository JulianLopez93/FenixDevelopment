import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpleados } from '../modelos/epleados.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloEmpleados[]> {
    return this.http.get<ModeloEmpleados[]>(`${this.url}/empleados`);
  }

  ObtenerRegistrosId(id:string): Observable<ModeloEmpleados> {
    return this.http.get<ModeloEmpleados>(`${this.url}/empleados/${id}`);
  }

  CrearEmpleado(empleado: ModeloEmpleados): Observable<ModeloEmpleados> {
    return this.http.post<ModeloEmpleados>(`${this.url}/empleados`, empleado, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarEmpleado(empleado: ModeloEmpleados): Observable<ModeloEmpleados> {
    return this.http.put<ModeloEmpleados>(`${this.url}/empleados/${empleado.Id}`, empleado, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(`${this.url}/empleados/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
