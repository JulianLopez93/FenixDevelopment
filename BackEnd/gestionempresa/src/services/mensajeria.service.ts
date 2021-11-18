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
    const accountSid = 'AC598f645c956e3c0e2ec24a4f348e735e';
    const authToken = '83295efac8c7efc48f6379ea1dc6494a';

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: `Mensaje enviado a ${empleado.Nombres} correctamente`,
        from: '+16109897815',
        to: '+573212448375'
      })
      .then((message:any) => console.log(message.sid));

  }
}
