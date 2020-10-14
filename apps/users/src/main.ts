import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(3001);
  const url = await app.getUrl();
  Logger.log(`${url}/graphql`);
}
bootstrap();
