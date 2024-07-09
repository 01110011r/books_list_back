import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
import Constants from './config/constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('Books list')
  .setDescription('Simple Books list backend.')
  .setVersion('0.0001V')
  .addTag('Apis')
  .addBearerAuth()
  .build();

  app.setGlobalPrefix('api')

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app
    .listen(Constants().port)
    .then((): void => log('server is running on port ' + Constants().port))
    .catch((err): void => log(err));
}
bootstrap();
