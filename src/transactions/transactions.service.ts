import { Injectable } from '@nestjs/common';
import { ChargeRequestType, ChargeResponseType } from '../types/transaction.types';
import { CardsService } from '../cards/cards.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TransactionsService {
  constructor(private readonly cardsService: CardsService) {}

  processTransaction(chargeRequest: ChargeRequestType): ChargeResponseType {
    const { card, amount, unitPrice, installments, orderId, description } = chargeRequest;
    const cardData = this.cardsService.validateCard(card);

    const totalValue = amount * unitPrice;

    if (!cardData || totalValue > cardData.purchaseLimit || installments > 10) {
      return {
        transacton: {
          transactionId: uuid(),
          status: "DECLINED",
          totalValue,
          createdAt: new Date(),
        },
        order: {
          referenceId: orderId,
          amount,
          unitPrice,
          description,
        },
      };
    }

    return {
      transacton: {
        transactionId: uuid(),
        status: "PAID",
        totalValue,
        createdAt: new Date(),
      },
      order: {
        referenceId: orderId,
        amount,
        unitPrice,
        description,
      },
    };
  }
}
