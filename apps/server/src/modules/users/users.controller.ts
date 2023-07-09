import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { BaseController } from '../base/base.controller';
import { BaseService } from '../base/base.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly usersService: BaseService<
      UserModel,
      CreateUserDto,
      UpdateUserDto
    >,
  ) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user;
  }
}
