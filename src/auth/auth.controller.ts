import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  Signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.Signup(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  Signin(@Body() createUserDto: CreateUserDto) {
    return this.authService.Signin(createUserDto);
  }
}
