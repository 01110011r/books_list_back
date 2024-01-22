import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookDoc, Books } from '../db/schemas/book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from '../dto/book-create.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Books.name) private readonly bookModel: Model<BookDoc>,
  ) {}

  async AddBook(createBookDto: CreateBookDto): Promise<BookDoc> {
    const book = await new this.bookModel(createBookDto);

    return book.save();
  },


  async  GetBooks(){
    return await this.bookModel.find().exec();
  }
}
