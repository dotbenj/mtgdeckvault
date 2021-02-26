import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ScryfallService {
  private scryfallApiUrl: string = 'https://api.scryfall.com';

  constructor(private httpService: HttpService) {}

  searchCard(query: string): Observable<AxiosResponse<any>> | Error {
    try {
      return this.httpService.get(
        `${this.scryfallApiUrl}/cards/search?q=${encodeURIComponent(query)}`,
        {
          headers: { Accept: 'application/json' },
        }
      ).pipe(
        map(response => response.data),
      );
    } catch (error) {
      return new Error(error.message);
    }
  }
}
