import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Produccion, ProduccionRelations} from '../models';

export class ProduccionRepository extends DefaultCrudRepository<
  Produccion,
  typeof Produccion.prototype.id,
  ProduccionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Produccion, dataSource);
  }
}
