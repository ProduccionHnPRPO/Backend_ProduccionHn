import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Produccion extends Entity {
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
  producto: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  destino: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Produccion>) {
    super(data);
  }
}

export interface ProduccionRelations {
  // describe navigational properties here
}

export type ProduccionWithRelations = Produccion & ProduccionRelations;
