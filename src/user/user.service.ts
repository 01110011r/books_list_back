import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDoc, Users } from 'src/db/schemas/user.schema';
import { CreateUserDto } from 'src/dto/user-create.dto';
import { UpdateUserDto } from 'src/dto/user-update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UserDoc>,
  ) {}

  async Signup(createUserDto: CreateUserDto): Promise<UserDoc> {
    const user = await new this.userModel(createUserDto);

    return user.save();
  }

  async Findall(): Promise<UserDoc[]> {
    return this.userModel.find().exec();
  }

  async Findone(id: string): Promise<UserDoc> {
    return this.userModel.findById(id);
  }

  async Updateuser(id: string, updateUserDto: UpdateUserDto): Promise<UserDoc> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }
}
