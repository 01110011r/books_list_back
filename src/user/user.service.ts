import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDoc, Users } from 'src/db/schemas/user.schema';
import { CreateUserDto } from 'src/dto/user-create.dto';
import { UpdateUserDto } from 'src/dto/user-update.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UserDoc>,
  ) {}

  async Signup(createUserDto: CreateUserDto): Promise<UserDoc> {
    createUserDto.password = await this.hashPassword(createUserDto.password);
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  protected async hashPassword(password: string) {
    const salt = await genSalt(4);
    return await hash(password, salt);
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
