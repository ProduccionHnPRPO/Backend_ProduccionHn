import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Distribucion extends Entity {
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
  lugar: string;

  @property({
    type: 'string',
    required: true,
  })
  producto: string;

  @property({
    type: 'string',
    required: true,
  })
  personaCargo: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  tienda: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Distribucion>) {
    super(data);
  }
}

export interface DistribucionRelations {
  // describe navigational properties here
}

export type DistribucionWithRelations = Distribucion & DistribucionRelations;
