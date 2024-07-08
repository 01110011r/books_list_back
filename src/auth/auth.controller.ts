import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/user-create.dto';
import { ApiTags } from '@nestjs/swagger';
import constants from 'src/config/constants';

@ApiTags('Auth')
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
    console.log(typeof constants().jwt.secret.toString())
    return this.authService.Signin(createUserDto);
  }
}
