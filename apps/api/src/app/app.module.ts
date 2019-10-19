import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarService } from './car.service';
import { CarController } from '../../../../libs/backend/car/src/lib/controllers/car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackendCarModule } from '@fullstack-wojtas/backend/car';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    BackendCarModule
  ],
  controllers: [AppController, CarController],
  providers: [AppService, CarService]
})
export class AppModule {}
