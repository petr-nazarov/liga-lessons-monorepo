import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel, PostSchema } from './post.model';
import { BaseService } from '../base/base.service';
import { PostsRepository } from './posts.repository';
import { BaseRepository } from '../base/base.repository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: PostModel.name, schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [
    {
      provide: BaseService,
      useClass: PostsService,
    },
    PostsRepository,
    {
      provide: BaseRepository,
      useClass: PostsRepository,
    },
  ],
})
export class PostsModule {}
