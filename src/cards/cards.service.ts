import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Card, CardDocument } from './schemas/card.schema';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async getCardByMongoId(mongoId: string): Promise <Card[] | Error> {
    const card = await this.cardModel.find({ _id: mongoId});
    if (card) {
      return card;
    }
    return new Error('Card not found');
  }
}
