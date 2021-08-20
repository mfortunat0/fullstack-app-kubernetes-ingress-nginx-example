import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Tarefa } from './app.entity';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'root',
      entities: [Tarefa],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Tarefa]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
