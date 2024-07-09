import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type UserDoc = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({required:true})
  username: string;

  @Prop()
  email: string;

  @Prop({required:true})
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Books' }] })
  ownBooks: MongooseSchema.Types.ObjectId[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Books' }] })
  takenBooks: MongooseSchema.Types.ObjectId[];
}

export const UserSchema: MongooseSchema<Users> =
  SchemaFactory.createForClass(Users);
