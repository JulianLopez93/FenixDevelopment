import {Entity, model, property, hasOne} from '@loopback/repository';
import {Empleado} from './empleado.model';

@model()
export class MensajeEmpleado extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Texto: string;

  @property({
    type: 'string',
    required: true,
  })
  IdTwilio: string;

  @property({
    type: 'string',
    required: true,
  })
  Destinatario: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @hasOne(() => Empleado)
  empleado: Empleado;

  @property({
    type: 'string',
  })
  empleadoId?: string;

  constructor(data?: Partial<MensajeEmpleado>) {
    super(data);
  }
}

export interface MensajeEmpleadoRelations {
  // describe navigational properties here
}

export type MensajeEmpleadoWithRelations = MensajeEmpleado & MensajeEmpleadoRelations;
