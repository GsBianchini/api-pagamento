import { Module } from '@nestjs/common';
import { CardsService } from './cards/cards.service';
import { CardsController } from './cards/cards.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';

@Module({
  imports: [],
  controllers: [CardsController, TransactionsController],
  providers: [CardsService, TransactionsService],
})
export class AppModule {}
