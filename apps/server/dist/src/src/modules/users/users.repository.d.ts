import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { BaseRepository } from '../base/base.repository';
export declare class UsersRepository extends BaseRepository<UserModel, CreateUserDto, UpdateUserDto> {
    private readonly userModel;
    constructor(userModel: Model<UserModel>);
}
//# sourceMappingURL=users.repository.d.ts.map