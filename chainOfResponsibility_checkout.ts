interface IHandler {
  nextSuccessor(successor: IHandler): void;
  handle(amount: number): string
}

class LinePay implements IHandler {
  successor: IHandler | undefined;
  nextSuccessor(successor: IHandler): void {
    this.successor = successor;
  }
  handle(amount: number) {
    let discount = 0;
    if (amount >= 1000) {
      discount = Math.floor(amount / 1000) * 100;
    }
    const hasDiscountAmount = amount - discount;
    console.log(`LinePay 結帳金額為 ${hasDiscountAmount}`);
  }
};

class CreditCard implements IHandler {
  successor: IHandler | undefined;
  nextSuccessor(successor: IHandler): void {
    throw new Error("Method not implemented.");
  }
  handle(amount: number): string;
  
  
};

class PaymentChain {
  chain1: IHandler;
  chain2: IHandler ;
  constructor() {
    this.chain1 = new LinePay();
    this.chain2 = new CreditCard();
    this.chain1.nextSuccessor(this.chain2);
  }
}

const chainOfAmount = 6000;
const payment = new PaymentChain();
payment.chain1.handle(chainOfAmount);