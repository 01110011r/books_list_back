import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";


export type UserDoc = HydratedDocument<Users>;


@Schema()
export class Users {
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    ownbooks: [{ type: MongooseSchema.Types.ObjectId, ref: 'Books' }];

    @Prop()
    takebooks: [{ type: MongooseSchema.Types.ObjectId, ref: 'Books' }];

};


export const UserSchema = SchemaFactory.createForClass(Users);