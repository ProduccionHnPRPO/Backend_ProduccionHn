import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Produccion} from '../models';
import {ProduccionRepository} from '../repositories';

@authenticate('jwt')
export class ProduccionController {
  constructor(
    @repository(ProduccionRepository)
    public produccionRepository: ProduccionRepository,
  ) { }

  @post('/produccions')
  @response(200, {
    description: 'Produccion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Produccion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produccion, {
            title: 'NewProduccion',
            exclude: ['id'],
          }),
        },
      },
    })
    produccion: Omit<Produccion, 'id'>,
  ): Promise<Produccion> {
    return this.produccionRepository.create(produccion);
  }

  @get('/produccions/count')
  @response(200, {
    description: 'Produccion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Produccion) where?: Where<Produccion>,
  ): Promise<Count> {
    return this.produccionRepository.count(where);
  }

  @get('/produccions')
  @response(200, {
    description: 'Array of Produccion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Produccion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Produccion) filter?: Filter<Produccion>,
  ): Promise<Produccion[]> {
    return this.produccionRepository.find(filter);
  }

  @patch('/produccions')
  @response(200, {
    description: 'Produccion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produccion, {partial: true}),
        },
      },
    })
    produccion: Produccion,
    @param.where(Produccion) where?: Where<Produccion>,
  ): Promise<Count> {
    return this.produccionRepository.updateAll(produccion, where);
  }

  @get('/produccions/{id}')
  @response(200, {
    description: 'Produccion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Produccion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Produccion, {exclude: 'where'}) filter?: FilterExcludingWhere<Produccion>
  ): Promise<Produccion> {
    return this.produccionRepository.findById(id, filter);
  }

  @patch('/produccions/{id}')
  @response(204, {
    description: 'Produccion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produccion, {partial: true}),
        },
      },
    })
    produccion: Produccion,
  ): Promise<void> {
    await this.produccionRepository.updateById(id, produccion);
  }

  @put('/produccions/{id}')
  @response(204, {
    description: 'Produccion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() produccion: Produccion,
  ): Promise<void> {
    await this.produccionRepository.replaceById(id, produccion);
  }

  @del('/produccions/{id}')
  @response(204, {
    description: 'Produccion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.produccionRepository.deleteById(id);
  }
}
