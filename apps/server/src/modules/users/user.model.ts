import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseModel } from '../base/base.model';

export type UserDocument = HydratedDocument<UserModel>;

@Schema()
export class UserModel extends BaseModel {
  @Prop()
  username: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
