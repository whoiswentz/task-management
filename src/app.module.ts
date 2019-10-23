import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TasksModule,
    AuthModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
