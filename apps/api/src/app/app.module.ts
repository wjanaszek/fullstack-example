import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarService } from './car.service';
import { CarController } from './car.controller';

@Module({
  imports: [],
  controllers: [AppController, CarController],
  providers: [AppService, CarService]
})
export class AppModule {}
