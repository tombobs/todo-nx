import {Module} from '@nestjs/common';
import {ListController} from './list.controller';
import {ListService} from './list.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ListEntity} from './list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ListEntity])],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService]
})
export class ListModule {}
