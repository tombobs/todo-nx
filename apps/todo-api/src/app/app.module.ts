import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { ListModule } from './list/list.module';
import { SetupModule } from './shared/setup.module';

@Module({
  imports: [
    SetupModule,
    TodoModule,
    ListModule
  ]
})
export class AppModule {
}
