import { Injectable } from '@nestjs/common';
import { Car, Comment } from '@fullstack-wojtas/shared/domain';

@Injectable()
export class CarService {
  private cars: Car[] = [];

  create(car: Car): void {
    this.cars.push(car);
  }

  createComment(id: string, comment: Comment): void {
    this.cars = this.cars.map(car => car.id === id ? {...car, comments: [...car.comments, comment]} : car);
  }

  findOne(query: Partial<Car>): Car | null {
    return this.cars.find(car => Object.keys(query).every(key => !!car[key] && car[key] === query[key]));
  }

  findAll(): Car[] {
    return this.cars;
  }

  removeComment(carId: string, commentId: string): void {
    this.cars = this.cars.map(car => car.id === carId ? {...car, comments: car.comments.filter(comment => comment.id !== commentId)} : car);
  }

  update(id: string, dto: Partial<Car>): void {
    this.cars = this.cars.map(car => car.id === id ? {...car, ...dto} : car);
  }

  updateComment(carId: string, commentId: string, content: string): void {
    this.cars = this.cars.map(car => car.id === carId ? {...car, comments: car.comments.map(comment => comment.id === commentId ? {...comment, content} : comment)} : car);
  }
}
