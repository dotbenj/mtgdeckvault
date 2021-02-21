import { Controller, Get, HttpException, Param, Post } from '@nestjs/common';

import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {

  constructor(private cardsService: CardsService) {}

  @Get(':mongoId')
  async getCardByMongoId(@Param('uid') mongoId: string) {
    try {
      return await this.cardsService.getCardByMongoId(mongoId);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }
}
