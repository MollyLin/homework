// Ref: [qmo's nbaFactory.ts](https://github.com/QmoGamer/oop_homework/blob/homework/nbaFactory.ts)
interface paymentOption {
  creditCard(): void;
  linePay(): void;
}

abstract class Checkout implements paymentOption {
  abstract creditCard(): void;
  abstract linePay(): void;
}

class PaymentFactory {
  constructor() {
    console.log('init');
  }
  static create(name: string): Checkout{
    switch(name) {
      case 'card':
        return new Creditcard();
      case 'line-pay':
        return new LinePay();
      default:
        throw Error('error');
    }
  }
}

PaymentFactory.create('credit').checkout();
PaymentFactory.create('line-pay').checkout();