/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { BaseService } from '../base/base.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: BaseService<UserModel, CreateUserDto, UpdateUserDto>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, UserModel> & Omit<UserModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, UserModel> & Omit<UserModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
//# sourceMappingURL=users.controller.d.ts.map