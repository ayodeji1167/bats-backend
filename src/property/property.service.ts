import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  create(data: any) {
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
