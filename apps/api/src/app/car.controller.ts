import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { Car } from '@fullstack-wojtas/shared/domain';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() car: Car): void {
    this.carService.create(car);
  }

  @Get(':id')
  findById(@Param() param: Partial<Car>): Car | null {
    return this.carService.findOne(param);
  }

  @Get()
  findAll(): Car[] {
    return this.carService.findAll();
  }
}
