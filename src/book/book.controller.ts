import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/book-create.dto';
import { UpdateBookDto } from './dto/book-update.dto';
import { AuthGuard } from './auth.guard';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @UseGuards(AuthGuard)
  @Post()
  CreateBook(@Body() createBookDto: CreateBookDto, @Req() user: any) {
    console.log(user)
    return {};
    return this.bookService.AddBook(createBookDto);
  }

  @Get()
  GetAllBooks() {
    return this.bookService.GetAllBooks();
  }

  @UseGuards(AuthGuard)
  @Get('id')
  GetBook(@Param('id') id: string) {
    return this.bookService.GetBook(id);
  }

  @Put('id')
  UpdateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.UpdateBook(id, updateBookDto);
  }

  @Delete('id')
  DeleteBook(@Param('id') id: string) {
    return this.bookService.DeleteBook(id);
  }
}
