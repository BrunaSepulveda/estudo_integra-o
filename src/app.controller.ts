import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('AppController')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('pokemon')
  getPokemon() {
    return this.appService.getPokemon();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
