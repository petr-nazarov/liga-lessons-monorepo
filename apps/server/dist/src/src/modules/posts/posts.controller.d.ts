import { PostsService } from './posts.service';
import { CreatePostDto } from 'types';
import { JwtPayload } from '../auth/jwt-payload.type';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    findAllModifined(): Promise<{
        message: string;
        posts: import("./post.model").PostModel[];
    }>;
    findAll(): Promise<import("./post.model").PostModel[]>;
    create(createPostDto: CreatePostDto, requestor: JwtPayload): Promise<import("./post.model").PostModel>;
}
//# sourceMappingURL=posts.controller.d.ts.map