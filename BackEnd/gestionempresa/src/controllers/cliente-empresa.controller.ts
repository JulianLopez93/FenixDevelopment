import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cliente,
  Empresa,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteEmpresaController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/empresas', {
    responses: {
      '200': {
        description: 'Array of Cliente has many Empresa',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empresa)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Empresa>,
  ): Promise<Empresa[]> {
    return this.clienteRepository.empresas(id).find(filter);
  }

  @post('/clientes/{id}/empresas', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Empresa)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.Id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empresa, {
            title: 'NewEmpresaInCliente',
            exclude: ['Id']
            //optional: ['clienteId']
          }),
        },
      },
    }) empresa: Omit<Empresa, 'Id'>,
  ): Promise<Empresa> {
    return this.clienteRepository.empresas(id).create(empresa);
  }

  @patch('/clientes/{id}/empresas', {
    responses: {
      '200': {
        description: 'Cliente.Empresa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empresa, {partial: true}),
        },
      },
    })
    empresa: Partial<Empresa>,
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return this.clienteRepository.empresas(id).patch(empresa, where);
  }

  @del('/clientes/{id}/empresas', {
    responses: {
      '200': {
        description: 'Cliente.Empresa DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return this.clienteRepository.empresas(id).delete(where);
  }
}
