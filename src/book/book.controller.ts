import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from '../dto/book-create.dto';
import { UpdateBookDto } from '../dto/book-update.dto';





@Controller('book')
export class BookController{

  constructor(private bookService:BookService){}


  @Post()
  CreateBook(@Body() createBookDto:CreateBookDto){
    return this.bookService.AddBook(createBookDto);
  };

@Get()
  GetAllBooks(){
    return this.bookService.GetAllBooks();
  };



@Get('id')
GetBook(@Param('id') id:string){
  return this.bookService.GetBook(id);
};



@Put('id')
  UpdateBook(@Param('id') id:string, @Body() updateBookDto:UpdateBookDto){
  return this.bookService.UpdateBook(id, updateBookDto);
};



@Delete('id')
  DeleteBook(@Param('id') id:string){
  return this.bookService.DeleteBook(id);
}


}