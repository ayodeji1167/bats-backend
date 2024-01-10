import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Request {
  @Prop()
  fullName: string;
  @Prop()
  email: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  propertyDescription: string;
  @Prop()
  purpose: string;
  @Prop({ default: 0 })
  budget: number;
}

export type RequestDocument = Document & Request;
export const RequestModel = SchemaFactory.createForClass(Request);
