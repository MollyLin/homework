export default class Dispenser50 implements IDispenser {
  successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    this.successor = successor;
  }

  handle(amount: number): void {
    if (amount >= 50) {
      const num = Math.floor(amount / 50);
      const remainder = amount % 50;
      console.log(`Dispensing ${num} $50 note`);
      if (remainder !== 0) {
        return (this.successor as IDispenser).handle(remainder);
      }
      return;
    }
    return (this.successor as IDispenser).handle(amount);
  }
}