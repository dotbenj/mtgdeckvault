import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { ScryfallService } from 'src/scryfall/scryfall.service';

import { CardsService } from './cards.service';
import { SearchCard } from './dto/search-card.dto';
import { Card } from './schemas/card.schema';

@Controller('cards')
export class CardsController {

  constructor(
    private cardsService: CardsService,
    private scryfall: ScryfallService,
  ) {}

  @Get(':mongoId')
  async getCardByMongoId(@Param('uid') mongoId: string) {
    try {
      return await this.cardsService.getCardByMongoId(mongoId);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Post()
  searchCardByName(@Body() search: SearchCard) {
    try {
      return this.scryfall.searchCard(search.query);
    } catch (error) {
      throw new HttpException(error.message, error.code);
    }
  }
}
