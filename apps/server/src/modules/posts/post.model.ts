import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseModel } from '../base/base.model';

export type PostDocument = HydratedDocument<PostModel>;

@Schema()
export class PostModel extends BaseModel {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  authorId: Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(PostModel);
