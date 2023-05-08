import { Body, Controller, Post } from "@nestjs/common";
import { IContactEmailRequest, IUser } from "@todo-nx/interfaces";
import { ContactEmailService } from "./contact-email.service";

@Controller('contact')
export class ContactEmailController {

  constructor(private contactEmailService: ContactEmailService) {
  }

  @Post('hello')
  contactHello(@Body() body: IContactEmailRequest) {
    return this.contactEmailService.sendContactHelloEmail(body);
  }
}
