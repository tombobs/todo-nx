import { Body, Controller, Post } from "@nestjs/common";
import { IUser } from "@todo-nx/interfaces";
import { AuthEmailService } from "./auth-email.service";

@Controller('auth')
export class AuthEmailController {

  constructor(private authEmailService: AuthEmailService) {
  }

  @Post('welcome')
  sendWelcomeEmail(user: IUser, token: string) {
    return this.authEmailService.sendWelcomeEmail(user, token);
  }

  @Post('password-reset')
  passwordResetEmail(@Body() {user, token}: {user: IUser, token: string}) {
    console.log(user, token)
    return this.authEmailService.sendPasswordResetEmail(user, token);
  }
}
