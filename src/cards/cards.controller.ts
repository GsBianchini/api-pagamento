import { Controller, Get } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('test-cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  getTestCards() {
    return this.cardsService.getTestCards();
  }
}
