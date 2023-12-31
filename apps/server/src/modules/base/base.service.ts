import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { FindPaginatedInput, FindPaginatedResult } from 'types';
@Injectable()
export class BaseService<TModel, TCreateDto, TUpdateDto> {
  constructor(
    private readonly baseRepository: BaseRepository<
      TModel,
      TCreateDto,
      TUpdateDto
    >,
  ) {}

  /**
   * This descibes the function
   * @returns result in format of data and meta
   * @example findPaginated({meta: {limit: 10, page: 1}, filter: {}})
   */
  async findPaginated(
    /**
      * This is the input for the function
      */
    input: FindPaginatedInput<TModel>,
  ): Promise<FindPaginatedResult<TModel>> {
    return await this.baseRepository.findPaginated(input);
  }
  async find(filter: any) {
    return await this.baseRepository.find(filter);
  }
  async create(createDto: TCreateDto) {
    return await this.baseRepository.create(createDto);
  }

  async findAll() {
    return await this.baseRepository.findAll();
  }

  async findOne(id: string) {
    return await this.baseRepository.findOne(id);
  }

  async update(id: string, updateDto: TUpdateDto) {
    return await this.baseRepository.update(id, updateDto);
  }

  async remove(id: string) {
    await this.baseRepository.remove(id);
  }
}
