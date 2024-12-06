export type ChargeRequestType = {
    type: "CARD";
    orderId: string;
    installments: number;
    unitPrice: number;
    amount: number;
    description?: string;
    card: {
      hold: string;
      number: string;
      expMonth: string;
      expYear: string;
      cvv: number;
    };
  };
  
  export type ChargeResponseType = {
    transacton: {
      transactionId: string;
      status: "PAID" | "DECLINED";
      totalValue: number;
      createdAt: Date;
    };
    order: {
      referenceId: string;
      amount: number;
      unitPrice: number;
      description?: string;
    };
  };
  