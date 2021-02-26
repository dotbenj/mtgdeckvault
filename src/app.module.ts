import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { VaultsModule } from './vaults/vaults.module';
import { CardsModule } from './cards/cards.module';
import { ScryfallModule } from './scryfall/scryfall.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'development.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    VaultsModule,
    CardsModule,
    ScryfallModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
