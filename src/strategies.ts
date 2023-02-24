interface Strategy {
  getName(): string;
  paymentHandle(amount: number): number;
}

class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  public executeStrategy(amount: number): void {
    return console.log(`${this.strategy.getName()} 結帳金額為 ${this.strategy.paymentHandle(amount)}`)
  }
}

class S_LinePayHandler implements Strategy {
  getName(): string {
    return 'LinePay';
  };
  paymentHandle(amount: number): number {
    let discount = 0;
    if (amount >= 1000) {
      discount = Math.floor(amount / 1000) * 100;
    }
    const hasDiscountAmount = amount - discount;
    return hasDiscountAmount;
  };
}

class S_CreditCardHandler implements Strategy {
  getName(): string {
    return '信用卡';
  };
  paymentHandle(amount: number): number {
    return Math.floor(amount * 0.8);
  };
}

const checkoutLinePay = new Context(new S_LinePayHandler());
checkoutLinePay.executeStrategy(6000);
const checkoutCreditCard = new Context(new S_CreditCardHandler());
checkoutCreditCard.executeStrategy(6000);
