import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication, Logger } from '@nestjs/common';

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
  const port = process.env.PORT || 3000;
  const host = process.env.HOST;
  swaggerSetup(app);
  app.enableCors();
  if (host) {
    await app.listen(port, host, () => {
      Logger.log(`Server running on http://${host}:${port}`, 'Bootstrap');
    });
  } else {
    await app.listen(port, () => {
      Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
    });
  }
}

bootstrap();
