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
import {Distribucion} from '../models';
import {DistribucionRepository} from '../repositories';

@authenticate('jwt')
export class DistribucionController {
  constructor(
    @repository(DistribucionRepository)
    public distribucionRepository: DistribucionRepository,
  ) { }

  @post('/distribucions')
  @response(200, {
    description: 'Distribucion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Distribucion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distribucion, {
            title: 'NewDistribucion',
            exclude: ['id'],
          }),
        },
      },
    })
    distribucion: Omit<Distribucion, 'id'>,
  ): Promise<Distribucion> {
    return this.distribucionRepository.create(distribucion);
  }

  @get('/distribucions/count')
  @response(200, {
    description: 'Distribucion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Distribucion) where?: Where<Distribucion>,
  ): Promise<Count> {
    return this.distribucionRepository.count(where);
  }

  @get('/distribucions')
  @response(200, {
    description: 'Array of Distribucion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Distribucion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Distribucion) filter?: Filter<Distribucion>,
  ): Promise<Distribucion[]> {
    return this.distribucionRepository.find(filter);
  }

  @patch('/distribucions')
  @response(200, {
    description: 'Distribucion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distribucion, {partial: true}),
        },
      },
    })
    distribucion: Distribucion,
    @param.where(Distribucion) where?: Where<Distribucion>,
  ): Promise<Count> {
    return this.distribucionRepository.updateAll(distribucion, where);
  }

  @get('/distribucions/{id}')
  @response(200, {
    description: 'Distribucion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Distribucion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Distribucion, {exclude: 'where'}) filter?: FilterExcludingWhere<Distribucion>
  ): Promise<Distribucion> {
    return this.distribucionRepository.findById(id, filter);
  }

  @patch('/distribucions/{id}')
  @response(204, {
    description: 'Distribucion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distribucion, {partial: true}),
        },
      },
    })
    distribucion: Distribucion,
  ): Promise<void> {
    await this.distribucionRepository.updateById(id, distribucion);
  }

  @put('/distribucions/{id}')
  @response(204, {
    description: 'Distribucion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() distribucion: Distribucion,
  ): Promise<void> {
    await this.distribucionRepository.replaceById(id, distribucion);
  }

  @del('/distribucions/{id}')
  @response(204, {
    description: 'Distribucion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.distribucionRepository.deleteById(id);
  }
}
