import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Users } from './user.schema';


export type BookDoc = HydratedDocument<Books>;

@Schema()
export class Books {
  @Prop({required: true})
  title: string;

  @Prop()
  description: string;

  @Prop()
  pages: number;

@Prop({type: [{type: MongooseSchema.Types.ObjectId, ref: Users.name}]})
  readers: MongooseSchema.Types.ObjectId[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Users.name, required: true })
  owner: MongooseSchema.Types.ObjectId;

  @Prop({required:true})
  status: ['new', 'reading', 'finished']
}

export const BookSchema: MongooseSchema<Books> =
  SchemaFactory.createForClass(Books);
