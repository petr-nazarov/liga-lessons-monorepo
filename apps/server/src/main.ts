import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const swaggerSetup = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .addBearerAuth(
      {
        type: 'http',
      },
      'default',
    )
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerSetup(app);
  await app.listen(3000);
}

bootstrap();
