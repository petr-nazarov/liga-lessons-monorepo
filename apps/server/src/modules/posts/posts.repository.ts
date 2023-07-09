import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostModel } from './post.model';
import { BaseRepository } from '../base/base.repository';
@Injectable()
export class PostsRepository extends BaseRepository<
  PostModel,
  CreatePostDto,
  UpdatePostDto
> {
  constructor(
    @InjectModel(PostModel.name) private readonly postModel: Model<PostModel>,
  ) {
    super(postModel);
  }
}
