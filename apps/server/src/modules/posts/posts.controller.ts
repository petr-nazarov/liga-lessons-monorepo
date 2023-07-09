import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BaseController } from '../base/base.controller';
import { BaseService } from '../base/base.service';
import { PostModel } from './post.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtPayload } from '../auth/jwt-payload.type';
import { Requestor } from '../auth/requestor.decorator';
import { AuthGuard } from '../auth/auth.guard';
@Controller('posts')
@ApiTags('posts')
@ApiBearerAuth('default')
@UseGuards(AuthGuard)
export class PostsController {
  constructor(
    private readonly postService: BaseService<
      PostModel,
      CreatePostDto,
      UpdatePostDto
    >,
  ) {}

  @Get()
  async findAllModifined() {
    const posts = await this.postService.findAll();
    return { message: 'hello world', posts };
  }

  @Get()
  async findAll() {
    const posts = await this.postService.findAll();
    return posts;
  }

  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
    @Requestor() requestor: JwtPayload,
  ) {
    const post = await this.postService.create({
      ...createPostDto,
      authorId: requestor._id,
    });
    return post;
  }
}
