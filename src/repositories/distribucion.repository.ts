import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Distribucion, DistribucionRelations} from '../models';

export class DistribucionRepository extends DefaultCrudRepository<
  Distribucion,
  typeof Distribucion.prototype.id,
  DistribucionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Distribucion, dataSource);
  }
}
