import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
import Constants from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app
    .listen(Constants().port)
    .then((): void => {
      log('server is running on port '+Constants().port);
    })
    .catch((err): void => {
      log(err);
    });
}
bootstrap();
