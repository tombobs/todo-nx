import { Module } from '@nestjs/common';
import { StorytimeController } from './storytime.controller';
import { StorytimeService } from './storytime.service';
import { SharedModule } from "../shared/shared.module";

@Module({
  imports: [SharedModule],
  controllers: [StorytimeController],
  providers: [StorytimeService],
})
export class StorytimeModule {}
