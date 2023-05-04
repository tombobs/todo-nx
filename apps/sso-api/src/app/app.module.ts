import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SetupModule } from './shared/setup.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    SetupModule,
    AuthModule,
    ProfileModule
  ]
})
export class AppModule {
}
