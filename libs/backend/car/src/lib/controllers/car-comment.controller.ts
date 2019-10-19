import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Comment } from '@fullstack-wojtas/shared/domain';
import { CarCommentService } from '../services/car-comment.service';

@Controller('cars/:carId/comments')
export class CarCommentController {
  constructor(private readonly carCommentService: CarCommentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Param('carId') carId: string, @Body() comment: Comment): void {
    this.carCommentService.create(carId, comment);
  }

  @Delete(':commentId')
  remove(
    @Param('carId') carId: string,
    @Param('commentId') commentId: string
  ): void {
    this.carCommentService.remove(carId, commentId);
  }

  @Put(':commentId')
  update(
    @Param('carId') carId: string,
    @Param('commentId') commentId: string,
    content: string
  ): void {
    this.carCommentService.update(carId, commentId, content);
  }
}
