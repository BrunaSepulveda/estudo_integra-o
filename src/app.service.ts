import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getPokemon(){
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon?limit=30')
      .pipe(
        map(response => response.data)
      );
  }
}
