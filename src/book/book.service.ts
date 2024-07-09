import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookDoc, Books } from '../db/schemas/book.schema';
import { Model, Types } from 'mongoose';
import { CreateBookDto } from './dto/book-create.dto';
import { UpdateBookDto } from './dto/book-update.dto';
import { Helper } from '../lib/lib.helper.service';
import { Users, UserSchema } from 'src/db/schemas/user.schema';

interface Owner {
  id: string,
  username: string,
}


@Injectable()
export class BookService {
  constructor(
    @InjectModel(Books.name) private readonly bookModel: Model<BookDoc>,
    private helper: Helper,
  ) {}


  async AddBook(createBookDto: CreateBookDto, owner: Owner): Promise<BookDoc | {}> {
    const ownerId = new Types.ObjectId(owner.id);
    const book = new this.bookModel({ ...createBookDto, owner:ownerId });
  
    return await book.save();
  }

  async GetAllBooks(): Promise<BookDoc[]> {
    return await this.bookModel
    .find()
    .populate([
      { path: 'owner', select: '-password' },
      { path: 'readers', select: '-password' }
    ])
    .exec();
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
