import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import constants from 'src/config/constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: constants().jwt.secret,
      signOptions: { expiresIn: '60d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
