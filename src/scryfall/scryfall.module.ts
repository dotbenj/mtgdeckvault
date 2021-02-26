import { HttpModule, Module } from '@nestjs/common';
import { ScryfallService } from './scryfall.service';

@Module({
  imports: [HttpModule],
  providers: [ScryfallService],
  exports: [ScryfallService],
})
export class ScryfallModule {}
