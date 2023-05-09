import { Module } from '@nestjs/common';
import { StorytimeModule } from './storytime/storytime.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    StorytimeModule
  ],
})
export class AppModule {}
