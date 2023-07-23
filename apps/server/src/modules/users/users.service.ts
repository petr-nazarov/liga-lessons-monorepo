import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { UserModel } from './user.model';
import { CreateUserDto } from 'types';
import { UpdateUserDto } from 'types';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService extends BaseService<
  UserModel,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly usersRepository: UsersRepository) {
    super(usersRepository);
  }
}
