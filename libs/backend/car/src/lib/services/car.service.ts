import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '@fullstack-wojtas/shared/domain';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>
  ) {}

  create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }

  findOne(id: string): Promise<Car> {
    return this.carRepository.findOneOrFail({ id });
  }

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  remove(car: Car): Promise<Car> {
    return this.carRepository.remove(car);
  }

  update(id: string, update: Partial<Car>): Promise<Car> {
    return this.carRepository.findOneOrFail({ id }).then(car => {
      return this.carRepository.save({ ...car, ...update });
    });
  }
}
