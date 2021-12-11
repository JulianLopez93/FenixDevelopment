import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModeloEmpleado } from '../modulos/modelos/empleado.modelo';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  ObtenerEmpleados(): Observable<ModeloEmpleado[]>
  {
    return this.http.get<ModeloEmpleado[]>(`${this.url}/empleados`)
  }

  CrearEmpleado(empleado: ModeloEmpleado):Observable<ModeloEmpleado>
  {
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`, empleado)
    {
      headers: new HttpHeaders({

      })
    }
  }

  ActualizarEmpleado(empleado: ModeloEmpleado):Observable<ModeloEmpleado>
  {
    return this.http.put<ModeloEmpleado>(`${this.url}/empleados`, empleado)
    {
      headers: new HttpHeaders({
        
      })
    }
  }

  EliminarEmpleado(id: string):Observable<any>
  {
    return this.http.delete<ModeloEmpleado>(`${this.url}/empleados/${id}`,
    {
      headers: new HttpHeaders({
        
      })
    })

  }
}
