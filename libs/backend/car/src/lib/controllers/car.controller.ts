import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Car } from '@fullstack-wojtas/shared/domain';
import { CarService } from '../services/car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() car: Car): void {
    this.carService.create(car);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Car> {
    return this.carService.findOne(id);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, update: Partial<Car>): void {
    this.carService.update(id, update);
  }
}
