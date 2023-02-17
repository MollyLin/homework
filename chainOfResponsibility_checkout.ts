interface IHandler {
  nextSuccessor(successor: IHandler): void;
  handle(amount: number): string
}

class LinePay implements IHandler {
  handle(amount: number) {
    let discount = 0;
    if (amount >= 1000) {
      discount = Math.floor(amount / 1000) * 100;
    }
    const hasDiscountAmount = amount - discount;
    console.log(`LinePay 結帳金額為 ${hasDiscountAmount}`);
  }
};

class Creditcard implements IHandler {
  handle(payload: number): number;
  handle(amount: number): string;
  handle(amount: unknown): string | number {
    throw new Error("Method not implemented.");
  }
  nextSuccessor(successor: IHandler): void {
    throw new Error("Method not implemented.");
  }
};

class PaymentChain {
  chain1: IHandler;
  chain2: IHandler;
  constructor() {
    this.chain1 = new LinePay();
    this.chain2 = new Creditcard();
    this.chain1.nextSuccessor(this.chain2);
  }
}

const chainOfAmount = 6000;
const payment = new PaymentChain();
payment.chain1.handle(chainOfAmount);