import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Users } from './user.schema';

export type BookDoc = HydratedDocument<Books>;

@Schema()
export class Books {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  pages: number;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Users' }] })
  readers: Users[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Users' })
  owner: Users;
}

export const BookSchema: MongooseSchema<Books> =
  SchemaFactory.createForClass(Books);
