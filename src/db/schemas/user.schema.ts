import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Books } from './book.schema';

export type UserDoc = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Books' }] })
  ownbooks: Books[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Books' }] })
  takebooks: Books[];
}

export const UserSchema = SchemaFactory.createForClass(Users);
