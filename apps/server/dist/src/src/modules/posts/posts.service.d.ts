import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostModel } from './post.model';
import { BaseService } from '../base/base.service';
import { PostsRepository } from './posts.repository';
export declare class PostsService extends BaseService<PostModel, CreatePostDto, UpdatePostDto> {
    private readonly postsRepository;
    constructor(postsRepository: PostsRepository);
}
//# sourceMappingURL=posts.service.d.ts.map