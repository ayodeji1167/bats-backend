import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FilePayload } from './dto/file-upload';

@Injectable()
export class PropertyService {
  create(files: FilePayload, data: CreatePropertyDto) {
    return data;
    // return `This action returns all property`;
  }
  findAll() {
    return `This action returns all property`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
