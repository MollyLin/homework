interface Handler {
  setNext(handler: Handler): Handler;
  handle(amount: number): void;
}

/** The default chaining behavior */
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | undefined;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(amount: number): void {
    if (this.nextHandler) {
      return this.nextHandler.handle(amount);
    }
  }
}

class LinePayHandler extends AbstractHandler {
  public handle(amount: number): void {
    let discount = 0;
    if (amount >= 1000) {
      discount = Math.floor(amount / 1000) * 100;
    }
    const hasDiscountAmount = amount - discount;
    console.log(`LinePay 結帳金額為 ${hasDiscountAmount}`);
    return super.handle(amount);
  }
}

class CreditCardHandler extends AbstractHandler {
  public handle(amount: number): void {
    const hasDiscountAmount = Math.floor(amount * 0.8);
    console.log(`信用卡結帳金額為 ${hasDiscountAmount}`);
    return super.handle(amount);
  }
};

const chainLinePay = new LinePayHandler();
const chainCreditCard = new CreditCardHandler();
chainLinePay.setNext(chainCreditCard);
chainLinePay.handle(6000);
/** option 2 */
// chainCreditCard.setNext(chainLinePay);
// chainCreditCard.handle(6000);