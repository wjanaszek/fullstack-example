import { Injectable } from '@nestjs/common';
import { Car } from '@fullstack-wojtas/shared/domain';

@Injectable()
export class CarService {
  private readonly cars: Car[] = [];

  create(car: Car): void {
    this.cars.push(car);
  }

  findOne(query: Partial<Car>): Car | null {
    return this.cars.find(car => Object.keys(query).every(key => !!car[key] && car[key] === query[key]));
  }

  findAll(): Car[] {
    return this.cars;
  }
}
