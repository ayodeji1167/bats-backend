import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestModule } from './request/request.module';
import { ConfigModule } from '@nestjs/config';
import config from './configuration/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConnect } from './db/mongo';

@Module({
  imports: [
    RequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({ useClass: MongooseConnect }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
