import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../../auth.service';

@Injectable()
export class LocalAuthGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  async canActivate(context: ExecutionContext) {
    const { email, password } = context.switchToHttp().getRequest().body;
    const user = await this.authService.validate({email, password});
    return !!user;
  }
}
