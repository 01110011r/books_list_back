import { ApiProperty } from '@nestjs/swagger';
import { BookDoc } from 'src/db/schemas/book.schema';

export class UserEntity {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  ownbooks: BookDoc[];

  @ApiProperty()
  takebooks: BookDoc[];
}
