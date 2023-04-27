import {Module} from '@nestjs/common';
import {TodoModule} from './todo/todo.module';
import {ConfigModule} from '@nestjs/config';
import {DatabaseModule} from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    DatabaseModule,
    TodoModule
  ],
})
export class AppModule {}
