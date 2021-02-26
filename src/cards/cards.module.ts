import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScryfallModule } from 'src/scryfall/scryfall.module';
import { ScryfallService } from 'src/scryfall/scryfall.service';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Card, CatSchema } from './schemas/card.schema';

@Module({
  imports: [MongooseModule.forFeature([{
      name: Card.name,
      schema: CatSchema,
    }]),
    ScryfallModule,
    HttpModule,
  ],
  controllers: [CardsController],
  providers: [
    CardsService,
    ScryfallService,
  ],
})
export class CardsModule {}
