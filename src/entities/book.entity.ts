import { UserDoc } from "src/db/schemas/user.schema";



export class BookEntity{
    title:string;
    description:string;
    pages:number;
    readers:UserDoc[];
    owner:UserDoc;
}