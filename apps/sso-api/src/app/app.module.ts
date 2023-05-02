import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SetupModule } from './shared/setup.module';

@Module({
  imports: [
    SetupModule,
    AuthModule,
  ]
})
export class AppModule {
}
