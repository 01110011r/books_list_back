import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/auth/dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.Signup(createUserDto);
  }

  @Get()
  findall() {
    return this.userService.Findall();
  }

  @Get(':id')
  findone(@Param('id') id: string) {
    return this.userService.Findone(id, null, null);
  }

  @Put(':id')
  updateuser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.Updateuser(id, updateUserDto);
  }
}
