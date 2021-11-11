import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Empleado} from './empleado.model';
import {Cliente} from './cliente.model';

@model()
export class Empresa extends Entity {
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
  RazonSocial: string;

  @property({
    type: 'string',
    required: true,
  })
  Nit: string;

  @hasOne(() => Empleado)
  empleado: Empleado;

 /* @property({
    type: 'string',
  })
  clienteId?: string;*/

  @hasMany(() => Cliente)
  clientes: Cliente[];

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
