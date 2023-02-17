export default class Dispenser20 implements IDispenser {
  successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    this.successor = successor;
  }

  handle(amount: number): void {
    if (amount >= 20) {
      const num = Math.floor(amount / 20);
      const remainder = amount % 20;
      console.log(`Dispensing ${num} $20 note`);
      if (remainder !== 0) {
        return (this.successor as IDispenser).handle(remainder);
      }
      return;
    }
    return (this.successor as IDispenser).handle(amount);
  }
}