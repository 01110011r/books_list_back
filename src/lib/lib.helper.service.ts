import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class Helper {
  constructor(private jwtService: JwtService) {}

  async extractUserIdFromToken(
    context: ExecutionContext,
  ): Promise<string | undefined> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log('helper ' + token)
    if (!token) {
      return undefined;
    }
    const payloadData = await this.jwtService.verify(token);
    console.log(payloadData);
    return payloadData ? payloadData._id : undefined;
  }

  extractTokenFromHeader(request: Request): string | undefined {
   
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    console.log('helper 26 ' + request.headers.authorization)
    return type === 'Bearer' ? token : undefined;
  }
}
