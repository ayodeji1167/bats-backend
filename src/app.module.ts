import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestModule } from './request/request.module';
import { ConfigModule } from '@nestjs/config';
import config from './configuration/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConnect } from './db/mongo';
import { MailModule } from './mail/mail.module';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';
import { InquiryModule } from './inquiry/inquiry.module';

@Module({
  imports: [
    RequestModule,
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({ useClass: MongooseConnect }),
    PropertyModule,
    UserModule,
    InquiryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
