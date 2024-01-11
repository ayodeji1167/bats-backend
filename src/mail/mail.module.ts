import { MailerModule } from '@nestjs-modules/mailer';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigService } from '@nestjs/config';
import { IBatsConfig } from 'src/configuration/interface';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const config = configService.get('live') as IBatsConfig;
        // return ({
        //   transport: {
        //    service:'gmail',
        //     auth: {
        //       user:config.email.user,
        //       pass: config.email.pass
        //     },
        //   },
        //   defaults: {
        //     from: `"Events dey" <${config.email.from}>`,
        //   },

        // });
        return {
          transport: {
            host: config.email.host,
            port: config.email.port,
            auth: {
              user: config.email.user,
              pass: config.email.pass,
            },
          },
          defaults: {
            from: `"BATs" <${config.email.from}>`,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
