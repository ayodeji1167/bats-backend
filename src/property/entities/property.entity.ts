import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreateLocation } from '../dto/create-property.dto';
import { IFile, IFiles } from 'src/shared/interface';

@Schema({
  timestamps: true,
})
export class Property {
  @Prop({ type: Object })
  mainImage: IFile;
  @Prop()
  leaseType: 'buy' | 'rent' | 'lease';
  @Prop()
  category: 'buy' | 'rent' | 'lease';
  @Prop({ unique: true })
  uniqueId: string;
  @Prop({ type: Object })
  otherImages: IFiles;
  @Prop()
  amenities: Array<string>;
  @Prop()
  title: string;
  @Prop()
  propertyType: string;
  @Prop()
  status: string;
  @Prop()
  area: string;
  @Prop({ default: 0 })
  price: number;
  @Prop({ default: 'AED' })
  currency: string;
  @Prop()
  yearBuilt: string;
  @Prop()
  floorNumber: string;
  @Prop({ type: CreateLocation })
  location: {
    country: string;
    state: string;
    city: string;
    address: string;
  };

  @Prop({ default: 0 })
  numberOfBedroom: number;
  @Prop({ default: 0 })
  numberofBathroom: number;
  @Prop({ default: 0 })
  numberofGarage: number;
  @Prop({ default: 0 })
  numberofKitchen: number;
  @Prop({ default: 0 })
  views: number;
  @Prop()
  longDescription: string;
  @Prop()
  shortDescription: string;
}

export type PropertyDocument = Document & Property;
export const PropertyModel = SchemaFactory.createForClass(Property);
