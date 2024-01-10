import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateRequestDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsString()
  propertyDescription: string;

  @IsString() purpose: string;
  @IsNumber() budget: string;
}
