import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Request, RequestDocument } from './entities/request.entity';
import { Model } from 'mongoose';

@Injectable()
export class RequestService {
  constructor(
    @InjectModel(Request.name) private requestModel: Model<RequestDocument>
  ) {}
  async create(createRequestDto: CreateRequestDto) {
    return await this.requestModel.create(createRequestDto);
  }

  async findAll() {
    return await this.requestModel.find({});
  }
}
