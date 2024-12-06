import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ChargeRequestType, ChargeResponseType } from '../types/transaction.types';

@Controller('charge')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  charge(@Body() chargeRequest: ChargeRequestType): ChargeResponseType {
    return this.transactionsService.processTransaction(chargeRequest);
  }
}
