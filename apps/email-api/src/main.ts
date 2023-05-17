import * as dotenv from 'dotenv';
dotenv.config();

import 'mysql';

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const globalPrefix = process.env.EMAIL_API_URL_PREFIX;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);

  // setupSwagger(app);

  const port = process.env.EMAIL_API_PORT || 3031;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();


function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('api.tom-roberts.dev/email')
    .setDescription('Swagger for Tom Roberts email API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);
}
