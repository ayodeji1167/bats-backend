import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Request, RequestModel } from './entities/request.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Request.name, schema: RequestModel }]),
  ],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
