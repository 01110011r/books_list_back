import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/user-create.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async Signup(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    const IsUsernameUnique = await this.userService.Findone(
      null,
      createUserDto.username,
      null,
    );
    const IsEmailUnique = await this.userService.Findone(
      null,
      null,
      createUserDto.email,
    );
    if (IsUsernameUnique || IsEmailUnique) {
      console.log(IsUsernameUnique, IsEmailUnique);
      throw new UnauthorizedException();
    }

    const newUser = await this.userService.Signup(createUserDto);
    if (!newUser) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const payload = { id: newUser._id, username: newUser.username };

    return {
      access_token: await this.jwtService.sign(payload),
    };
  }

  async Signin(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    const user: any = createUserDto.username
      ? await this.userService.Findone(null, createUserDto.username, null)
      : createUserDto.email
        ? await this.userService.Findone(null, null, createUserDto.email)
        : null;

    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordMatch = await compare(createUserDto.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }

    const payload = { id: user._id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
