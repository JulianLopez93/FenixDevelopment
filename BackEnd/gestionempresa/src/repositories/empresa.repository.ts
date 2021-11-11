import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Empresa, EmpresaRelations, Empleado, Cliente} from '../models';
import {EmpleadoRepository} from './empleado.repository';
import {ClienteRepository} from './cliente.repository';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.Id,
  EmpresaRelations
> {

  public readonly empleado: HasOneRepositoryFactory<Empleado, typeof Empresa.prototype.Id>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Empresa.prototype.Id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Empresa, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.empleado = this.createHasOneRepositoryFactoryFor('empleado', empleadoRepositoryGetter);
    this.registerInclusionResolver('empleado', this.empleado.inclusionResolver);
  }
}
