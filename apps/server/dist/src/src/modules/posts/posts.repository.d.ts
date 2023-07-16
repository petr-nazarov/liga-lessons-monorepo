import { CreatePostDto } from 'types';
import { UpdatePostDto } from 'types';
import { Model } from 'mongoose';
import { PostModel } from './post.model';
import { BaseRepository } from '../base/base.repository';
export declare class PostsRepository extends BaseRepository<PostModel, CreatePostDto, UpdatePostDto> {
    private readonly postModel;
    constructor(postModel: Model<PostModel>);
}
//# sourceMappingURL=posts.repository.d.ts.map