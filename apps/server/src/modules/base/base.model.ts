import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class BaseModel {
  @Prop()
  name: string;
}

