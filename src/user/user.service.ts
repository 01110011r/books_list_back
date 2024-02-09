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
    const user = new this.userModel(createUserDto);

    return user.save();
  }

  async Findall(): Promise<UserDoc[]> {
    return this.userModel.find().exec();
  }

  async Findone(
    id: string | null,
    username: string | null,
    email: string | null,
  ): Promise<UserDoc> {
    return id
      ? this.userModel.findOne({ id })
      : username
        ? this.userModel.findOne({ username })
        : this.userModel.findOne({ email });
  }

  async Updateuser(id: string, updateUserDto: UpdateUserDto): Promise<UserDoc> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }
}
