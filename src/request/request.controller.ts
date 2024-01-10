import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async create(@Body() createRequestDto: CreateRequestDto) {
    return await this.requestService.create(createRequestDto);
  }

  @Get()
  async findAll() {
    return await this.requestService.findAll();
  }
}
