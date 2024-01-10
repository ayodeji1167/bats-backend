import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { IBatsConfig } from 'src/configuration/interface';

@Injectable()
export class MongooseConnect implements MongooseOptionsFactory {
  private readonly config: IBatsConfig;

  constructor(private configService: ConfigService) {
    this.config = configService.get('live') as IBatsConfig;
  }
  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    return {
      uri: this.config.database.uri,
    };
  }
}
