import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SearchCard {
  @ApiProperty({
    description: 'fulltext search',
    required: true,
  })
  @IsNotEmpty()
  readonly query: string;
}