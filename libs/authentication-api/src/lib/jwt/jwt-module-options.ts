import {JwtModuleOptions} from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

export const jwtModuleOptions: JwtModuleOptions = {
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: process.env.JWT_EXPIRY }
}
