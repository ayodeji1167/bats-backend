import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary/cloudinary.service';

import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class SharedModule {}
