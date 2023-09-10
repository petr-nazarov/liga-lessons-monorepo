import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from 'types';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtPayload } from 'types';
import { Requestor } from '../auth/requestor.decorator';
import { AuthGuard } from '../auth/auth.guard';
import { FindPaginatedInput } from 'types';
@Controller('posts')
@ApiTags('posts')
@ApiBearerAuth('default')
@UseGuards(AuthGuard)
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  // @Get()
  // async findAllModifined() {
  //   const posts = await this.postService.findAll();
  //   return { message: 'hello world', posts };
  // }

  @Get()
  async getPaginated(@Query() query: FindPaginatedInput<CreatePostDto>) {
    const posts = await this.postService.findPaginated(query);
    return posts;
  }
  // @Get()
  // async findAll() {
  //   const posts = await this.postService.findAll();
  //   return posts;
  // }

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
