import { Injectable } from '@nestjs/common';
import { Car, Comment } from '@fullstack-wojtas/shared/domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarCommentService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>
  ) {}

  create(carId: string, comment: Comment): Promise<Car> {
    return this.findCarByIdOrFail(carId).then(car => {
      car.comments = [...car.comments, comment];
      return this.carRepository.save(car);
    });
  }

  remove(carId: string, commentId: string): Promise<Car> {
    return this.findCarByIdOrFail(carId).then(car => {
      car.comments = car.comments.filter(comment => comment.id !== commentId);
      return this.carRepository.save(car);
    });
  }

  update(carId: string, commentId: string, content: string): Promise<Car> {
    return this.findCarByIdOrFail(carId).then(car => {
      car.comments = car.comments.map(comment =>
        comment.id === commentId ? { ...comment, content } : comment
      );
      return this.carRepository.save(car);
    });
  }

  private findCarByIdOrFail(id: string): Promise<Car> {
    return this.carRepository.findOneOrFail({ id });
  }
}
