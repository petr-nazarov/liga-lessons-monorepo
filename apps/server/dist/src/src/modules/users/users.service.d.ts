import { BaseService } from '../base/base.service';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService extends BaseService<UserModel, CreateUserDto, UpdateUserDto> {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
}
//# sourceMappingURL=users.service.d.ts.map