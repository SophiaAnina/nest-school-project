import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { Animal } from './animals/entities/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    UsersModule,
    AnimalsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Greygang123',
      database: 'nest-example',
      entities: [Animal],
      synchronize: true,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
  constructor(private dataSource:DataSource){}
}
