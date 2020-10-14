import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  await app.listen(3002);
  const url = await app.getUrl();
  Logger.log(`${url}/graphql`);
}
bootstrap();
