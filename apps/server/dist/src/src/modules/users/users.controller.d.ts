import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./user.model").UserModel[]>;
    create(createUserDto: CreateUserDto): Promise<import("./user.model").UserModel>;
}
//# sourceMappingURL=users.controller.d.ts.map