import * as dotenv from 'dotenv';
dotenv.config();

const globalPrefix = process.env.AI_API_URL_PREFIX;
console.log(process.env.OPEN_AI_KEY)

import { INestApplication, Logger } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);

  // setupSwagger(app);

  const port = process.env.AI_API_PORT || 40002;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();


function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('api.tom-roberts.dev/ai')
    .setDescription('Swagger for Tom Roberts ai API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);
}
