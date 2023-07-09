import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TokenMiddleware } from './modules/auth/token.middleware';
import { JwtModule } from '@nestjs/jwt';
import { CoreModule } from './core.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password@localhost:7500'),
    CoreModule,
    PostsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes('*');
  }
}
