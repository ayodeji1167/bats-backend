import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EMAIL_SUBJECTS } from 'src/configuration/constants';
import { convertHandlebars } from './convert';
import { MailData, SendMail } from './interface';

@Injectable()
export class MailService implements SendMail {
  constructor(private mailerService: MailerService) {}

  async sendMail(to: string, subject: string, payload: MailData) {
    const path = this.getPath(subject);
    const readyTemplate = convertHandlebars(path);
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        html: readyTemplate(payload),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
  // async sendMailWithAttachment(to: string, subject: string, payload: MailData) {
  //   const path = this.getPath(subject);
  //   const readyTemplate = this.convertTemplate.convertHandlebars(path);
  //   try {
  //     await this.mailerService.sendMail({
  //       to,
  //       subject,
  //       html: readyTemplate(payload),
  //       attachments: [
  //         {
  //           filename: payload.filename,
  //           content: payload.content,
  //           contentType: payload.contentType,
  //         },
  //       ],
  //     });
  //   } catch (e) {
  //     //@ts-ignore
  //     console.log(e);

  //     throw new Error(e);
  //   }
  // }

  // async sendUserWelcome(firstName: string, email: string, link: string) {
  //   await this.mailerService.sendMail({
  //     to: email,
  //     subject: 'Welcome To Hubb, User',
  //     template: 'verify',
  //     context: {
  //       firstName,
  //       link,
  //     },
  //   });
  // }

  getPath(subject: string) {
    let path: string = '';
    switch (subject) {
      case EMAIL_SUBJECTS.ONE_NEW_REQUEST:
        path = '../mail/html/new-request.hbs';
        break;
      case EMAIL_SUBJECTS.REQUEST_SUCCESSFUL:
        path = '../html/request-success.hbs';
        break;
      default:
        path = '';
        break;
    }
    return path;
  }
}
