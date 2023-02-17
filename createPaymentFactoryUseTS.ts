const totalAmount = 6000;
let amount = 0;

// const priceStrategies = {
//   'creditCard': creditCard,
//   'linePay': linePay,
// };

class CreatePayment {
  private paymentType: string;
  private amount: number;

  static calculate(paymentType: string, amount: number) {
    return priceStrategies[paymentType as 'creditCard' | 'linePay'](amount);
  };

  constructor(paymentType: string, amount: number) {
    this.paymentType = paymentType;
    this.amount = amount;
  }
  private credit():number {
    return Math.floor(totalAmount * 0.8);
  }
  private linePay():number {
    let discount = 0;
    if (totalAmount >= 1000) {
      discount = Math.floor(totalAmount / 1000) * 100;
    }
    return totalAmount - discount;
  }
  checkout():string {
    if (this.paymentType === 'creditCard') {
      this.paymentType = '信用卡';
      this.amount = this.credit();
    }
    if (this.paymentType === 'linePay') {
      this.paymentType = '行動支付';
      this.amount = this.linePay();
    }
    return `${this.paymentType} 結帳總金額為 ${this.amount}`;
  }
}

const useCreditCard: CreatePayment = new CreatePayment('creditCard', amount);
const useLinePay: CreatePayment = new CreatePayment('linePay', amount);

console.log(useCreditCard.checkout());
console.log(useLinePay.checkout());
// console.log(useCreditCard.paymentType);
// console.log(useCreditCard.credit());