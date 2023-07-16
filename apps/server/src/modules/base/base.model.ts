import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class BaseModel {
  _id: string;
  @Prop()
  name: string;
}
