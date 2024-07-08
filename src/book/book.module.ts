import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BookSchema } from '../db/schemas/book.schema';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { LibModule } from 'src/lib/lib.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Books.name,
        schema: BookSchema,
      },
    ]),
    LibModule
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
