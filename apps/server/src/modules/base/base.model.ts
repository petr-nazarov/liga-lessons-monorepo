import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class BaseModel {
  @Prop()
  name: string;
}
