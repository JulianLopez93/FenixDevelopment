import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Empleado} from '../models/empleado.model';

@injectable({scope: BindingScope.TRANSIENT})
export class MensajeriaService {
  constructor() { }

  /*
   * Add service methods here
   */

  EnviarSMS(empleado: Empleado): void {
    
    console.log("conexión con Twilio exitosa.");
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    let authToken = process.env.TWILIO_AUTH_TOKEN;
    if (authToken != undefined){
      authToken = authToken.replace(/"/g,'');
    }

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: `Se ha registrado a ${empleado.Nombres} ${empleado.Apellidos}  como un nuevo empleado.`,
        from: '+18507508309',
        to: '+57' + `${empleado.Telefono}`
      })
      .then((message: any) => console.log(message.sid));

  }
}
