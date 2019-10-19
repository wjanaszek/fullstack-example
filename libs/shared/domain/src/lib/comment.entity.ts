import { Column, Entity, ManyToOne } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Comment {
  @Column()
  id: string;

  @Column({ length: 500 })
  content: string;

  creator: string; // @TODO change to user
  createDate: string; // @TODO

  @ManyToOne(type => Car, car => car.comments, { cascade: ['update'] })
  car: Car;
}
