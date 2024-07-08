import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './book-create.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {}
