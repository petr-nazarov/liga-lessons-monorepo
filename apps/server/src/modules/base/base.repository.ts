import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseModel } from './base.model';
import { FindPaginatedInput } from 'types';
import { FindPaginatedResult } from 'types';
@Injectable()
export class BaseRepository<TModel, TCreateDto, TUpdateDto> {
  constructor(
    @InjectModel(BaseModel.name) private readonly baseModel: Model<TModel>,
  ) {}
  async findPaginated(
    input: FindPaginatedInput<TModel>,
  ): Promise<FindPaginatedResult<TModel>> {
    const { meta, filter } = input;
    const page = meta?.page ? meta.page : 1;
    const perPage = meta?.perPage ? meta.perPage : 10;
    const sortBy = meta?.sortBy ? meta.sortBy : ('_id' as keyof TModel);
    const sortOrder = meta?.sortOrder ? meta.sortOrder : 'ASC';

    const skip = (page - 1) * perPage;
    const sort = {
      [sortBy]: sortOrder === 'ASC' ? 1 : -1,
    } as any;
    const [data, total] = await Promise.all([
      this.baseModel
        .find(filter as any)
        .skip(skip as any)
        .limit(perPage as any)
        .sort(sort as any),
      this.baseModel.countDocuments(filter as any),
    ]);
    const totalPages = Math.ceil(total / perPage);
    return {
      data,
      meta: {
        page,
        perPage,
        sortBy,
        sortOrder,
        total,
        totalPages,
      },
    };
  }
  async find(filter: any) {
    return (await this.baseModel.find(filter)) as TModel[];
  }
  async create(createDto: TCreateDto) {
    const createdModel = new this.baseModel(createDto);
    return (await createdModel.save()) as TModel;
  }

  async findAll() {
    return (await this.baseModel.find()) as TModel[];
  }

  async findOne(id: string) {
    return (await this.baseModel.findById(id)) as TModel;
  }

  async update(id: string, updateDto: TUpdateDto) {
    return {} as TModel;
    //return await this.baseModel.findByIdAndUpdate(id, updateDto) as TModel;
  }

  async remove(id: string) {
    await this.baseModel.findByIdAndRemove(id);
  }
} 
