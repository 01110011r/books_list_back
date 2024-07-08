import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import Constants from './config/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[Constants]
    }),
    MongooseModule.forRoot(Constants().db.local_db_url),
    UserModule,
    BookModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
