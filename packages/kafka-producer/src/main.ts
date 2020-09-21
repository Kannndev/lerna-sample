import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as commonUtils from 'common-utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  commonUtils('Module');
  await app.listen(3000);
}
bootstrap();
