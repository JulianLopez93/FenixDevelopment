import {Entity, model, property, hasMany} from '@loopback/repository';
import {MensajeEmpleado} from './mensaje-empleado.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'string',
  })
  Direccion?: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'number',
    required: true,
  })
  Edad: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaNacimiento: string;

  @property({
    type: 'number',
    required: true,
  })
  Salario: number;

  @property({
    type: 'boolean',
    required: true,
  })
  EsDirectivo: boolean;

  @property({
    type: 'string',
  })
  empresaId?: string;

  @hasMany(() => MensajeEmpleado)
  mensajeEmpleados: MensajeEmpleado[];

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
