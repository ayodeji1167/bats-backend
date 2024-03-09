import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsIn,
  IsNumber,
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';

export class CreateLocation {
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsString()
  zipCode: string;
}

export class CreatePropertyDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['buy', 'rent', 'lease'])
  leaseType: string;

  @IsArray()
  @ValidateNested({ each: true }) // Validate each item in the array
  @Type(() => String) // Explicitly specify string type
  amenities: string[];

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  propertyType: string;

  @IsOptional()
  @IsString()
  yearBuilt: string;

  @IsOptional()
  @IsString()
  currency: string;
  @IsNotEmpty()
  @IsString()
  longDescription: string;
  @IsNotEmpty()
  @IsString()
  shortDescription: string;

  @IsNumber()
  @IsString()
  floorNumber: number;

  @IsOptional()
  @IsNumber()
  area: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsOptional()
  @IsNumber()
  numberOfBedroom: number;
  @IsOptional()
  @IsNumber()
  numberofBathroom: number;
  @IsOptional()
  @IsNumber()
  numberofGarage: number;
  @IsOptional()
  @IsNumber()
  numberofKitchen: number;

  @ValidateNested()
  @Type(() => CreateLocation)
  @IsOptional()
  location: CreateLocation;
  // =======================================
}
