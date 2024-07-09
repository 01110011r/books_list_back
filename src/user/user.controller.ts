import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findall() {
    return this.userService.Findall();
  }

  @Get(':id')
  findone(@Param('id') id: string) {
    return this.userService.Findone(id, null, null);
  }

  @Put(':id')
  async updateuser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.Updateuser(id, updateUserDto);
  }
}
