import { BookDoc } from "src/db/schemas/book.schema";

export class UserEntity{
    username:string;
    email:string;
    password:string;
    ownbooks:BookDoc[];
    takebooks:BookDoc[];
}