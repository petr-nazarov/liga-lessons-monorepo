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
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BaseService } from '../base/base.service';
import { PostModel } from './post.model';
import { JwtPayload } from '../auth/jwt-payload.type';
export declare class PostsController {
    private readonly postService;
    constructor(postService: BaseService<PostModel, CreatePostDto, UpdatePostDto>);
    findAllModifined(): Promise<{
        message: string;
        posts: (import("mongoose").Document<unknown, {}, PostModel> & Omit<PostModel & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, PostModel> & Omit<PostModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    create(createPostDto: CreatePostDto, requestor: JwtPayload): Promise<import("mongoose").Document<unknown, {}, PostModel> & Omit<PostModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
//# sourceMappingURL=posts.controller.d.ts.map