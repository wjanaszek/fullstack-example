import { Module } from '@nestjs/common';
import { CarController } from './controllers/car.controller';
import { CarCommentController } from './controllers/car-comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '@fullstack-wojtas/shared/domain';
import { CarService } from './services/car.service';
import { CarCommentService } from './services/car-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarController, CarCommentController],
  providers: [CarService, CarCommentService]
})
export class BackendCarModule {}
