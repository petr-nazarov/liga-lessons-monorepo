import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { ApiProperty } from '@nestjs/swagger';

export  class BaseController<TModel, TCreateDto, TUpdateDto> {
  constructor(
    private readonly baseService: BaseService<TModel, TCreateDto, TUpdateDto>,
  ) { }

  @Post()
  create(@Body() createDto: TCreateDto) {
    return this.baseService.create(createDto);
  }

  @Get()
  findAll() {
    return this.baseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: TUpdateDto) {
    return this.baseService.update(id, updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseService.remove(id);
  }
}
