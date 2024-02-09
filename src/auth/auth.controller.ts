import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Signin(@Body() authDto: AuthDto) {
    return this.authService.Signin(authDto);
  }
}
