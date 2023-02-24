interface IPayment {
  handle(amount: number): void;
}

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

class Factory {
  getLinePay(amount: number): void {
    return new F_LinePayHandler().handle(amount);
  };
  getCreditCard(amount: number): void {
    return new F_CreditCardHandler().handle(amount);
  };
}

const PaymentFactory = new Factory();
PaymentFactory.getLinePay(6000);
PaymentFactory.getCreditCard(6000);