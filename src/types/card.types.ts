export type Card = {
    hold: string; // "John Doe F. Oliver"
    number: string; // "0000 0000 0000"
    expMonth: string; // "12"
    expYear: string; // "25"
    cvv: number; // 123
  };
  
  export type CardTestType = {
    card: Card;
    purchaseLimit: number; // 100.00
  };
  