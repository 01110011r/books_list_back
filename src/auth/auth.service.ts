import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dto/user-create.dto';
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
    const username = await this.userService.Findone(
      null,
      createUserDto.username,
      null,
    );
    const email = await this.userService.Findone(
      null,
      null,
      createUserDto.email,
    );
    if (username || email) {
      console.log(username, email);
      throw new UnauthorizedException();
    }

    const newUser: any = await this.userService.Signup(createUserDto);
    if (!newUser) {
      throw new UnauthorizedException();
    }

    const payload = { id: newUser._id, username: newUser.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async Signin(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    const user: any = await this.userService.Findone(
      null,
      createUserDto.username,
      null,
    );

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
