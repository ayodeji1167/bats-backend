import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Request, RequestDocument } from './entities/request.entity';
import { Model } from 'mongoose';
import { MailService } from 'src/mail/mail.service';
import { EMAIL_SUBJECTS } from 'src/configuration/constants';

@Injectable()
export class RequestService {
  constructor(
    @InjectModel(Request.name) private requestModel: Model<RequestDocument>,
    private mailService: MailService
  ) {}
  async create(createRequestDto: CreateRequestDto) {
    const request = await this.requestModel.create(createRequestDto);
    await this.mailService.sendMail(
      request.email,
      EMAIL_SUBJECTS.ONE_NEW_REQUEST,
      {}
    );
    return request;
  }

  async findAll() {
    return await this.requestModel.find({});
  }
}
