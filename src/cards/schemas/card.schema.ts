import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop({
    required: true,
    unique: true,
  })
  scryfallId: string;

  @Prop({
    unique: true,
  })
  cardmarketId: number;

  @Prop({
    required: true,
    unique: true,
  })
  oracleId: string;

  @Prop({
    required: true,
  })
  lang: string;

  @Prop({
    required: true,
  })
  scryfallUri: string;

  @Prop()
  cardFaces: string[];

  @Prop({
    required: true,
  })
  manaValue: number;

  @Prop({
    required: true,
  })
  colorIdentity: string;

  @Prop({
    required: true,
    default: false,
  })
  foil: boolean;

  @Prop({
    required: true,
  })
  keywords: string[];

  @Prop({
    required: true,
  })
  layout: string;

  @Prop({
    required: true,
  })
  legalities: any[];

  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  typeLine: string;

  @Prop({
    required: true,
  })
  collectorNumber: string;

  @Prop({
    required: true,
  })
  rarity: string;
}

export const CatSchema = SchemaFactory.createForClass(Card);
