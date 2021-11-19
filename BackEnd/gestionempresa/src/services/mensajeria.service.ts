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
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: `${empleado.Nombres} ${empleado.Apellidos}, has sido creado correctamente`,
        from: '+18039024115',
        to: '+57' + `${empleado.Telefono}`
      })
      .then((message: any) => console.log(message.sid));

  }
}
