import { Prop, Schema } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from "mongoose";



@Schema()
export class Books {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    pages: number;

    @Prop()
    readers: [{ type: MongooseSchema.Types.ObjectId, ref: 'Users' }];

    @Prop()
    owner: { type: MongooseSchema.Types.ObjectId, ref: 'Users' }
}