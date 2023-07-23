import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { CreateUserDto } from 'types';
import { UpdateUserDto } from 'types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../base/base.repository';

@Injectable()
export class UsersRepository extends BaseRepository<
  UserModel,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>,
  ) {
    super(userModel);
  }
}
