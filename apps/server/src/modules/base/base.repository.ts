import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseModel } from './base.model';
@Injectable()
export class BaseRepository<TModel, TCreateDto, TUpdateDto> {
  constructor(
    @InjectModel(BaseModel.name) private readonly baseModel: Model<TModel>,
  ) {}

  async find(filter: any) {
    return await this.baseModel.find(filter);
  }
  async create(createDto: TCreateDto) {
    const createdModel = new this.baseModel(createDto);
    return await createdModel.save();
  }

  async findAll() {
    return await this.baseModel.find();
  }

  async findOne(id: string) {
    return await this.baseModel.findById(id);
  }

  async update(id: string, updateDto: TUpdateDto) {
    return await this.baseModel.findByIdAndUpdate(id, updateDto);
  }

  async remove(id: string) {
    await this.baseModel.findByIdAndRemove(id);
  }
}
