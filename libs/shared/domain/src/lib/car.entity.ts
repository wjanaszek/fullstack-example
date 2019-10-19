import { Comment } from './comment.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Car {
  @Column()
  id: string;

  @Column({ length: 100 })
  model: string;

  @OneToMany(type => Comment, comment => comment.car, {
    nullable: true,
    cascade: ['remove']
  })
  comments: Comment[] = [];
}
