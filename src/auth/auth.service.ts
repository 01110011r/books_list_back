import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async Signin(authDto: AuthDto): Promise<{ access_token: string }> {
    const user: any = this.userService.Findone(null, authDto.username, null);

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { id: user._id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
