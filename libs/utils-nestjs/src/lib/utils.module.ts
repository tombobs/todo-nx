import { Module } from '@nestjs/common';
import { ApiHttpUtils } from './http-utils.service';

@Module({
  controllers: [],
  providers: [ApiHttpUtils],
  exports: [ApiHttpUtils],
})
export class UtilsModule {}
