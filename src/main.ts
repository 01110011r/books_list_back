import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app
    .listen(3003)
    .then((): void => {
      log('server is running on port 3003 ');
    })
    .catch((err): void => {
      log(err);
    });
}
bootstrap();
