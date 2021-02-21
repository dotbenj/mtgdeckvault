import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Card } from '../../cards/schemas/card.schema';

export type VaultDocument = Vault & mongoose.Document;

@Schema()
export class Vault {
  @Prop()
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card'}]
  })
  cards: Card[];
}

export const CatSchema = SchemaFactory.createForClass(Vault);
