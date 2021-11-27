import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Empleado} from '../models/empleado.model';
import {MensajeEmpleado} from '../models/mensaje-empleado.model';
import {EmpleadoRepository} from '../repositories/empleado.repository';

import {
  repository,
}from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
}from '@loopback/rest';

@injectable({scope: BindingScope.TRANSIENT})
export class MensajeriaService {
  constructor(@repository(EmpleadoRepository) protected empleadoRepository: EmpleadoRepository) { }

  /*
   * Add service methods here
   */

  EnviarSMS(empleado: Empleado): void {
    console.log(empleado.Id);
    console.log("conexión con Twilio exitosa.");
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    let authToken = process.env.TWILIO_AUTH_TOKEN;
    if (authToken != undefined){
      authToken = authToken.replace(/"/g,'');
    }

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);
    let _empleado = empleado;

    client.messages
      .create({
        body: `Se ha registrado a ${empleado.Nombres} ${empleado.Apellidos}  como un nuevo empleado.`,
        from: '+18039024115',
        to: '+57' + `${empleado.Telefono}`
      })
      .then((message: any) =>{

        console.log(message.sid);
        
        let mensajeEmpleado:MensajeEmpleado = new MensajeEmpleado();

        mensajeEmpleado.Tipo = "mensaje";
        mensajeEmpleado.Texto = message.body;
        mensajeEmpleado.IdTwilio = message.sid;
        mensajeEmpleado.Destinatario = message.to;
        mensajeEmpleado.Estado = message.status;
        console.log(_empleado.Id);

        this.empleadoRepository.mensajeEmpleados(_empleado.Id).create(mensajeEmpleado);
    });


  }
}
