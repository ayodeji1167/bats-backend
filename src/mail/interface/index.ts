export interface SendMail {
  sendMail(to: string, subject: string, payload: MailData): void;
}

export interface MailData {
  firstName?: string;
  otp?: string;
  lastName?: string;
  link?: string;
  number?: string;
  filename?: string;
  content?: any;
  contentType?: string;
  email?: string;
  imageUrl?: string;
  eventName?: string;
  eventDate?: string;
  totalPrice?: any;
  ticketQuantity?: number;
  ticketType?: string;
}
