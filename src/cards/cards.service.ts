import { Injectable } from '@nestjs/common';
import { Card, CardTestType } from '../types/card.types';

@Injectable()
export class CardsService {
  private readonly testCards: CardTestType[] = [
    {
      card: {
        hold: "John Doe F. Oliver",
        number: "1111 2222 3333 4444",
        expMonth: "12",
        expYear: "25",
        cvv: 123,
      },
      purchaseLimit: 1000.00,
    },
    {
      card: {
        hold: "Jane Doe",
        number: "5555 6666 7777 8888",
        expMonth: "11",
        expYear: "26",
        cvv: 456,
      },
      purchaseLimit: 500.00,
    },
  ];

  getTestCards(): CardTestType[] {
    return this.testCards;
  }

  validateCard(card: Card): CardTestType | null {
    return this.testCards.find(
      (testCard) =>
        testCard.card.hold === card.hold &&
        testCard.card.number === card.number &&
        testCard.card.expMonth === card.expMonth &&
        testCard.card.expYear === card.expYear &&
        testCard.card.cvv === card.cvv,
    );
  }
}
