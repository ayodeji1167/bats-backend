import { Injectable } from '@nestjs/common';

@Injectable()
export class InquiryService {
  findAll() {
    return `This action returns all inquiry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inquiry`;
  }

  remove(id: number) {
    return `This action removes a #${id} inquiry`;
  }
}
