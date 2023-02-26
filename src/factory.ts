interface IPayment {
  handle(amount: number): void;
}

/**
 * Concrete Product 實作類別
 */
class F_LinePayHandler implements IPayment {
  public handle(amount: number): void {
    let discount = 0;
    if (amount >= 1000) {
      discount = Math.floor(amount / 1000) * 100;
    }
    const hasDiscountAmount = amount - discount;
    console.log(`LinePay 結帳金額為 ${hasDiscountAmount}`);
  };
};

class F_CreditCardHandler implements IPayment {
  public handle(amount: number): void {
    const hasDiscountAmount = Math.floor(amount * 0.8);
    console.log(`信用卡結帳金額為 ${hasDiscountAmount}`);
  };
};

/**
 * Simple Factory
 */
class Factory {
  create(paymentType: string): IPayment {
    switch (paymentType) {
      case 'Credit':
        return new F_CreditCardHandler();
      case 'LinePay':
        return new F_LinePayHandler();
      default:
        throw new Error(`${paymentType} not found`);
    }
  }
}

const PaymentFactory = new Factory();
PaymentFactory.create('Credit').handle(6000);
PaymentFactory.create('LinePay').handle(6000);