import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
@Injectable()
export class BaseService<TModel, TCreateDto, TUpdateDto> {
  constructor(
    private readonly baseRepository: BaseRepository<
      TModel,
      TCreateDto,
      TUpdateDto
    >,
  ) {}

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
