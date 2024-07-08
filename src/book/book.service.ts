import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookDoc, Books } from '../db/schemas/book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/book-create.dto';
import { UpdateBookDto } from './dto/book-update.dto';
import { UserService } from '../user/user.service';
import { Helper } from '../lib/lib.helper.service';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Books.name) private readonly bookModel: Model<BookDoc>,
    private helper: Helper,
  ) {}

  async AddBook(createBookDto: CreateBookDto): Promise<BookDoc> {
    // const ownerId = await this.helper.extractUserIdFromToken();
    // console.log(ownerId);
    const book = await new this.bookModel({ ...createBookDto });

    return book.save();
  }

  async GetAllBooks(): Promise<BookDoc[]> {
    return await this.bookModel.find().exec();
  }

  async GetBook(id: string): Promise<BookDoc> {
    return this.bookModel.findById(id);
  }

  async UpdateBook(id: string, updateBookDto: UpdateBookDto): Promise<BookDoc> {
    return this.bookModel.findByIdAndUpdate(id, updateBookDto);
  }

  async DeleteBook(id: string) {
    return this.bookModel.findByIdAndRemove(id);
  }
}
