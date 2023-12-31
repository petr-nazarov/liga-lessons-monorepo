import { Injectable } from '@nestjs/common';
import { CreatePostDto } from 'types';
import { UpdatePostDto } from 'types';
import { PostModel } from './post.model';
import { BaseService } from '../base/base.service';
import { PostsRepository } from './posts.repository';
@Injectable()
export class PostsService extends BaseService<
  PostModel,
  CreatePostDto,
  UpdatePostDto
> {
  constructor(private readonly postsRepository: PostsRepository) {
    super(postsRepository);
  }
}
