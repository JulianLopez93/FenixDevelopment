import { injectable, /* inject, */ BindingScope } from '@loopback/core';
import {Empleado} from '../models/empleado.model'

@injectable({ scope: BindingScope.TRANSIENT })
export class MensajeriaService {
  constructor() { }

  /*
   * Add service methods here
   */

  EnviarSMS(empleado: Empleado): void {
    console.log("coneccion");
    const accountSid = '';
    const authToken = '';

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: `Mensaje enviado a ${empleado.Nombres} correctamente`,
        from: '',
        to: ''
      })
      .then((message:any) => console.log(message.sid));

  }
}
