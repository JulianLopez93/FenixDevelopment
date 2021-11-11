import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Empresa} from '../models';
import {EmpresaRepository} from './empresa.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.Id,
  ClienteRelations
> {

  public readonly empresas: HasManyRepositoryFactory<Empresa, typeof Cliente.prototype.Id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>,
  ) {
    super(Cliente, dataSource);
    this.empresas = this.createHasManyRepositoryFactoryFor('empresas', empresaRepositoryGetter,);
    this.registerInclusionResolver('empresas', this.empresas.inclusionResolver);
  }
}
