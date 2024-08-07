import { ApiProperty } from '@nestjs/swagger';
import { UserDoc } from 'src/db/schemas/user.schema';

export class BookEntity {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  pages: number;

  @ApiProperty()
  writer: string;

  @ApiProperty()
  owner: UserDoc;

  @ApiProperty()
  status: ['new', 'reading', 'finished']

}
