import { Comment } from './comment.model';

export class Car {
  id: string;
  model: string;
  comments: Comment[] = [];
}
