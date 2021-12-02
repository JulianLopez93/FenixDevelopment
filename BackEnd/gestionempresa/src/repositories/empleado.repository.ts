import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, MensajeEmpleado} from '../models';
import {MensajeEmpleadoRepository} from './mensaje-empleado.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.Id,
  EmpleadoRelations
> {

  public readonly mensajeEmpleados: HasManyRepositoryFactory<MensajeEmpleado, typeof Empleado.prototype.Id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('MensajeEmpleadoRepository') protected mensajeEmpleadoRepositoryGetter: Getter<MensajeEmpleadoRepository>,
  ) {
    super(Empleado, dataSource);
    this.mensajeEmpleados = this.createHasManyRepositoryFactoryFor('mensajeEmpleados', mensajeEmpleadoRepositoryGetter,);
    this.registerInclusionResolver('mensajeEmpleados', this.mensajeEmpleados.inclusionResolver);
  }
}
