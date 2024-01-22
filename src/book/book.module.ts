import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BookSchema } from '../db/schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Books.name,
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class BookModule {}
