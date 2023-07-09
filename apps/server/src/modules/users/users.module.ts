import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserModel, UserSchema } from './user.model';
import { BaseService } from '../base/base.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseModel } from '../base/base.model';
import { UsersRepository } from './users.repository';
import { BaseRepository } from '../base/base.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: BaseService,
      useClass: UsersService,
    },
    UsersRepository,
    {
      provide: BaseRepository,
      useClass: UsersRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
