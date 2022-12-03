import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  // TODO: import ./ormconfig.ts options
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['dist/src/entities/*.entity.js'],
      // entities: ['Task'],
      synchronize: true,
    }),
    TaskModule,
  ]
})
export class AppModule {}
